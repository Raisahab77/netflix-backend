const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    showName:{
        type:String,
        required:true,
    },
    showType:{
        type:Number,
        require:true,
    },
    duration:{
        type:String,
        require:false
    },
    season:{
        type:String,
        require:false
    },
    genres:{
        type:Array,
        require:true
    },
    quality:{
        type:String,
        require:true
    },
    certification:{
        type:String,
        require:true
    },
    thumbnailImg:{
        type:String,
        require:true
    },
    imgTitle:{
        type:String
    },
    movieUrl:{
        type:String
    }

})

const Movies =  new  mongoose.model("Movie",movieSchema);

module.exports = Movies;