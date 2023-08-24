const mongoose = require('mongoose');

// TODO: validation (title and movieId) should be unique
const notificationSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    movieId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Movie',
        require:true,
    },
    movieUrl:{
        type:String
    },
    createdOn:{
        type:Date,
        default: () => Date.now()
    }
})

const Notifications =  new  mongoose.model("Notification",notificationSchema);

module.exports = Notifications;