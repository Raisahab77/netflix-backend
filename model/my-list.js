const mongoose = require('mongoose');

const myListSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users',
        required:true
    },
    movieId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Movie',
        require:true,
    },
})

const MyLists =  new  mongoose.model("MyList",myListSchema);

module.exports = MyLists;