const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practice");

const userschema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
});// this make DOCUMENT

module.exports = mongoose.model('user', userschema);// it make collection 
