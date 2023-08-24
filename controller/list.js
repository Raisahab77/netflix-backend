const express = require('express');
const List = require('../model/list');
const Movies = require('../model/movies');
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
        for(let i=0;i<list.length;i++){
            for(let j = 0; j<list[i].movieId.length;j++){
                const movie =  await Movies.findOne({_id:list[i].movieId[j]});
                console.log(movie);
                movieId = list[i].movieId[j];
                console.log('*********************');
                console.log(movieId);
                list[i].movieId[j] = movie;
            }
        }

        // console.log(list);
        let response = {
            "statusCode":200,
            "msg":"Success",
            "data":list
        };
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