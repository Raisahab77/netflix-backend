const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const router = require('./controller/user');
const Users = require('./model/models');

const app = express();
const cors = require("cors");
require("./db/db");



dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/user',router);

app.get('/test',(req,res)=>{
    res.status(401).send("401");
})


app.listen(PORT,()=>console.log(`Server running on port: http://localhost:${PORT}`))