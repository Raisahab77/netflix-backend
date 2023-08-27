const mongoose = require('mongoose');

const movieDetailSchema = new mongoose.Schema({
    movieId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Movie',
        require:true,
    },
    season:{
        type:String,
    },
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true,
    },
    cast:[{
        name:String,
        characterName:String,
        img:String,
    }],
    episodes:[
        {
        number:Number,
        title: String,
        desc: String,
        thumbnail: String,
        duration: String,
        url: String,
        }
    ],
    trailer:[
        {
            thumbnail:String,
            url:String,
            duration:String
        }

    ],
    duration:String

})

const MovieDetails =  new  mongoose.model("MovieDetail",movieDetailSchema);

module.exports = MovieDetails;