const express = require('express');
const myList = require('../model/my-list');
const Movies = require('../model/movies');
// const bodyParser = require('body-parser');


const router = express.Router();

router.get('/:id',async(req,res)=>{
    const id = req.params.id;
    try
    {
        const mylist = await myList.find({userId:id});
        console.log(mylist);
        let response = {
            "statusCode":200,
            "msg":"Success",
            "data":mylist
        };
        res.status(200).send(response);
    }catch(e){
        res.status(500).send(e);
    }
})

router.post('/',(req,res)=>{
    console.log(req.body);
    const mylist = new myList(req.body);
    mylist.save().then(()=>{
        res.status(201).send(mylist);
    }).catch((error)=>{
        res.send(error);
    })
})

module.exports = router;