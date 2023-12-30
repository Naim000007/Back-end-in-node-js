const express = require('express');
const { MongoClient } = require('mongodb');
require('colors')

const app = express()

const port = process.env.PORT || 5000;





app.listen(port , ()=>{
    console.log(`app is running on ${port}`.cyan.bold);
})