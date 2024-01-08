const mongoose = require('mongoose');

exports.connectMongoose =()=>{
    mongoose.connect('mongodb+srv://Naim:Naim123@practice.tstsgpx.mongodb.net/?retryWrites=true&w=majority')
    .then(e => console.log(`connected to mongoDB`))
}

const userSchema = new mongoose.Schema({
    name: String,
    username:{
        type :String ,
        required:true,
        unique: true  
    },
    password: {
        type: String,
        required:true,
    }
})
exports.User = mongoose.model("User", userSchema)