const express = require('express');
const MovieDetail = require('../model/movies-detail');
const verify = require('../verify');

const router = express.Router();

router.get('/:id',verify,async(req,res)=>{
    const movieId = req.params.id;
    try
    {
        let movieDetail = await MovieDetail.findOne({movieId:movieId});
        if(movieDetail==null || movieDetail==undefined){
            movieDetail = await MovieDetail.findOne({movieId:"64d91ce60e6ad338fead8a17"});
        }
        console.log(movieDetail);
        let response = {
            "statusCode":200,
            "msg":"Success",
            "data":movieDetail
        };
        res.status(200).send(response);
    }catch(e){
        res.status(500).send(e);
    }
})

router.post('/',(req,res)=>{
    console.log(req.body);
    const movieDetail = new MovieDetail(req.body);
    movieDetail.save().then(()=>{
        res.status(201).send(movieDetail);
    }).catch((error)=>{
        res.send(error);
    })
})

module.exports = router;