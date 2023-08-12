const express = require('express');
const jwt = require('jsonwebtoken');
const Users = require('../model/models');
// const bodyParser = require('body-parser');


const router = express.Router();
const app = express();
// app.use(bodyParser.json());

// Insert a user
router.post('/sign-up',(req,res)=>{
    console.log(req.body);
    const user = new Users(req.body);
    user.save().then(() => {
        res.status(201).send(user);
        console.log("Saved Successfully");
    }).catch((err) => {
        res.send(err);
        console.log(err)
    });
})

// Get All user
router.get('/',async (req,res)=>{
    try{
        const user =  await Users.find({});
        res.send(user);
    }catch(e){
        res.send(e);
    }
})

// Check if user exist
router.get('/:id', async (req,res)=>{
    try{
        const user =  await Users.find({userName:userName});
        console.log(user);
        if(user.length>0)
        {
            let response = {
                "statusCode":200,
                "msg":"User found"
            }
            res.send(response);
        }
        else
        {
            let response = {
                "statusCode":403,
                "msg":"User not found"
            }
            res.send(response);
        }
    }catch(e){
        res.send(e);
    }
})

router.post('/login',async (req,res)=>{
    try{
        const userName = req.body.userName;
        const password = req.body.password;
        const user = await Users.find({userName:userName});
        console.log(user.length);
        if(user.length>0){
            if(user[0].password===password){
                let response = {
                    "statusCode":200,
                    "msg":"User found",
                    "Email": userName,
                    "accessToken":""
                };
                let jwtSecretKey = process.env.JWT_SECRET_KEY;
                const token = jwt.sign(response, jwtSecretKey); 
                response.accessToken = token;
                res.send(response);
            }else{
                let response = {
                    "statusCode":400,
                    "msg":"Incorrect User Or Password"
                }
                res.send(response);
            }
        }else{
            let response = {
                "statusCode":404,
                "msg":"User not exist"
            }
            res.send(response);
        }
    }
    catch(err){
        console.log(err);
        res.send(err);
        // console.log(err)
    }
})

router.post('/reset-password/email',async(req,res)=>{
    const email = req.body.email;
    try{
        const user =  await Users.find({userName:email});
        console.log(user);
        if(user.length>0)
        {
            let response = {
                "statusCode":200,
                "msg":"Password reset link sent to email."
            }
            res.send(response);
        }
        else
        {
            let response = {
                "statusCode":403,
                "msg":"User doesn't exist."
            }
            res.send(response);
        }
    }catch(e){
        res.send(e);
    }
})

router.post('/reset-password/phone',async(req,res)=>{
    const phone = req.body.phone;
    try{
        const user =  await Users.find({userName:phone});
        console.log(user);
        if(user.length>0)
        {
            let response = {
                "statusCode":200,
                "msg":"Password reset link sent to your mobile."
            }
            res.send(response);
        }
        else
        {
            let response = {
                "statusCode":403,
                "msg":"User doesn't exist."
            }
            res.send(response);
        }
    }catch(e){
        res.send(e);
    }
})



module.exports = router; 