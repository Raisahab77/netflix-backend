const express = require('express');
const List = require('../model/list');
const Movies = require('../model/movies');
const myList = require('../model/my-list');
// const bodyParser = require('body-parser');


const router = express.Router();
const app = express();
// app.use(bodyParser.json());


router.get('/',async(req,res)=>{
    const typeQuery = Number(req.query.type);
    const genreQuery = req.query.genres;
    console.log(typeQuery,genreQuery);
    let list = [];
    try{
        if(typeQuery && typeQuery!=0){
            if(genreQuery){
                list = await List.aggregate([
                    // $match find where type and genre present
                    {$match:{showType:typeQuery,genres:genreQuery}},
                    // If we got too many result $sample select 10 of them
                    {$sample:{size:10}}
                ]);
            }
            else{
                list = await List.aggregate([
                    {$match:{showType:typeQuery}},
                    {$sample:{size:10}}
                ]);
            }
        }else{
            list = await List.aggregate([{$sample:{size:10}}]);
        }
        const mylist = await myList.find({userId:"64cf52f937de0de62654d170"});
        // let myListMap =  mylist.map(element => element.id);
        // console.log(myListMap);
        // console.log(typeof(myListMap));
        let myListArr = [];
        for(let i = 0; i<mylist.length;i++){
            myListArr.push({
                "movieId":mylist[i].movieId.valueOf(),
                "_id":mylist[i]._id.valueOf()
            });
        }
        for(let i=0;i<list.length;i++){
            for(let j = 0; j<list[i].movieId.length;j++){
                const movie =  await Movies.findOne({_id:list[i].movieId[j]});
                // console.log(movie);
                // movieId = list[i].movieId[j];
                if(myListArr.includes(movie._id.valueOf())){
                    movie['isFavourite'] = true;
                }else{
                    movie['isFavourite'] = false;
                }
                list[i].movieId[j] = movie;
            }
        }
        let newObj = JSON.parse(JSON.stringify(list));
        for(let i=0;i<newObj.length;i++){
            for(let j = 0; j<newObj[i].movieId.length;j++){
                let movieId = newObj[i].movieId[j]._id;
                for(let k = 0; k < myListArr.length; k++){
                    if(myListArr[k].movieId == movieId){
                        newObj[i].movieId[j]['isFavourite'] = true;
                        newObj[i].movieId[j]['myList'] = myListArr[k];
                        break;
                    }else{
                        newObj[i].movieId[j]['isFavourite'] = false;
                        newObj[i].movieId[j]['myList'] = myListArr[k];
                    }
                }
            }
        }

        // console.log(list);
        let response = {
            "statusCode":200,
            "msg":"Success",
            "data":newObj
        };
        // console.log(list);
        res.send(response);
    }catch(e){
        res.send(e);
    }
})

router.post('/',(req,res)=>{
    console.log(req.body);
    const list = new List(req.body);
    list.save().then(() => {
        res.status(201).send(list);
        console.log("Saved Successfully");
    }).catch((err) => {
        res.send(err);
        console.log(err)
    });
})

module.exports = router; 