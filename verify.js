const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

function verify(req,res,next){
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    const authHeader = req.headers.authorization;
    if(authHeader){
        const token = authHeader.split(' ')[1];
            jwt.verify(token,jwtSecretKey,(error,success)=>{
                if(error){
                    return res.status(401).send("Invalid Token");
                }
                req.success = success;
                return next();
            })
    }
    else{
        res.status(401).send("you are not loggedin");
    }
}

module.exports = verify;