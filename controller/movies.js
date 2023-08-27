const express = require('express');
const Movies = require('../model/movies');
// const bodyParser = require('body-parser');


const router = express.Router();
const app = express();
// app.use(bodyParser.json());

router.get('/', async (req, res) => {
  const movies = await Movies.find({});
  let response = {
      "statusCode":200,
      "msg":"Success",
      "data":movies
  };
  res.send(response);
})

router.post('/add-movie', (req, res) => {
  // console.log(req.body);
  const data = req.body;
  isArr = Object.prototype.toString.call(data) == '[object Array]';
  console.log(isArr);
  if(isArr){
    for(let i = 0; i < data.length; i++ ){
      const movie = new Movies(data[i]);
      movie.save().then(() => {
        if(i==data.length-1){
          res.status(201).send(movie);
        }
        console.log("Saved Successfully");
      }).catch((err) => {
        if(i==data.length-1){
          res.send(err);
        }
        console.log(err)
      });
    }
    // res.status(201).send(movie);
  }
  else{
    const movie = new Movies(req.body);
    movie.save().then(() => {
      res.status(201).send(movie);
      console.log("Saved Successfully");
    }).catch((err) => {
      res.send(err);
      console.log(err)
    });
  }
})

router.get('/category',async (req,res)=>{
  let typeQuery = Number(req.query.type);
  const genreQuery = req.query.genres;
  let movie;
  try{
    if(typeQuery && typeQuery!=0){
      if(genreQuery){
          movie = await Movies.aggregate([
            { $match: { showType: typeQuery, genres: genreQuery } },
            { $sample: { size: 10 } }
          ]);
          console.log(movie);
          let response = {
            "statusCode":200,
            "msg":"Data found",
            "data":movie
        }
          res.send(response);
      }
      else{
          movie = await Movies.aggregate([
              {$match:{showType:typeQuery}},
              {$sample:{size:10}}
          ]);
          let response = {
            "statusCode":200,
            "msg":"Data found",
            "data":movie
        }
          res.send(response);
      }
    }
    else{
      movie = await Movies.aggregate([{$sample:{size:10}}]);
      let response = {
        "statusCode":200,
        "msg":"Data found",
        "data":movie
    }
      res.send(response);
    }
  }
  catch(err){
    console.log(error);
    res.send(err);
  }
})

router.get('/random',async (req,res)=>{
  let typeQuery = Number(req.query.type);
  const genreQuery = req.query.genres;
  let movie;

  try{
    if(typeQuery && typeQuery!=0){
      if(genreQuery){
          movie = await Movies.aggregate([
            { $match: { showType: typeQuery, genres: genreQuery } },
            { $sample: { size: 1 } }
          ]);
          console.log(movie);
          res.send(movie);
      }
      else{
          movie = await Movies.aggregate([
              {$match:{showType:typeQuery}},
              {$sample:{size:1}}
          ]);
          res.send(movie);
      }
    }
    else{
      movie = await Movies.aggregate([{$sample:{size:1}}]);
      res.send(movie);
    }
  }
  catch(err){
    console.log(error);
    res.send(err);
  }
})

router.get('/:id', async (req,res)=>{
  let movieId = req.params.id;
  try{
      const movie =  await Movies.find({_id:movieId});
      console.log(movie);
      if(movie.length>0)
      {
          let response = {
              "statusCode":200,
              "msg":"Data found",
              "data":movie
          }
          res.send(response);
      }
      else
      {
          let response = {
              "statusCode":404,
              "msg":"Data not found"
          }
          res.send(response);
      }
  }catch(e){
      res.send(e);
  }
})
module.exports = router; 