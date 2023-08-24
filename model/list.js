const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    movieId:{
        type:Array,
        required:true
    },
    genres:{
        type:Array,
        require:true
    },
    showType:{
        type:Number,
        require:true,
    }

})

const Lists =  new  mongoose.model("List",listSchema);

module.exports = Lists;