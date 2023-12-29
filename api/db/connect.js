const mongoose = require('mongoose');

uri = "mongodb+srv://Naim:Naim123@restapi.u3qkvrf.mongodb.net/RESTAPI?retryWrites=true&w=majority"

const connectDB = ()=>{
    console.log(`connect db`);
    console.log(`connect db`);
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB