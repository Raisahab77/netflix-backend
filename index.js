const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const users = require('./controller/user');
const movies = require('./controller/movies');
const notification = require('./controller/notification');
const list = require('./controller/list');
const myList = require('./controller/my-list');

const app = express();
const cors = require("cors");
require("./db/db");



dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users',users);
app.use('/movies',movies);
app.use('/notifications',notification);
app.use('/lists',list);
app.use('/my-list',myList);

app.get('/test',(req,res)=>{
    res.status(401).send("401");
})


app.listen(PORT,()=>console.log(`Server running on port: http://localhost:${PORT}`))