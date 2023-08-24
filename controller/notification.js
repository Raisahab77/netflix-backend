const express = require('express');
const Notifications = require('../model/notification');
// const bodyParser = require('body-parser');


const router = express.Router();
const app = express();
// app.use(bodyParser.json());


router.get('/',async(req,res)=>{
    try{
        const notification = await Notifications.find({});
        let response = {
            "statusCode":200,
            "msg":"Success",
            "data":notification
        };
        res.send(response);
    }catch(e){
        res.send(e);
    }
})

router.post('/',(req,res)=>{
    console.log(req.body);
    const notification = new Notifications(req.body);
    notification.save().then(() => {
        res.status(201).send(notification);
        console.log("Saved Successfully");
    }).catch((err) => {
        res.send(err);
        console.log(err)
    });
})

module.exports = router; 