const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/netflix",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection successful");
}).catch((e)=>{
    console.log("Unable to connect with database",e);
})