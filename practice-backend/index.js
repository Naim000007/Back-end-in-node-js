const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.set("view engine", "ejs")

app.use(function(req, res, next){
    console.log('hello form middleware');
    next();
})
app.use(function(req, res, next){
    console.log('hello form middleware2');
    next();
})

app.get('/contact' , (req, res)=>{
    res.render('aboutUs')
})


//to make any route dynamic we use (:) at the place where you want to make it dynamic and to access the value use req.params 

app.get('/facebook/:username' , (req, res)=>{
    let username = req.params.username;
    res.send(`hi this is ${username}'s facebook id name`)
})
app.get('/facebook', (req , res)=>{
    res.send('hi i am facebook ')
})

app.get('/profile', (req , res)=>{
    res.send('hi i am profile ')
})

app.get('/twitter', (req, res)=>{
    res.send('hi it is twitter page')
})


app.listen(port , (req, res)=>{
    console.log(`server running on ${port}`)
})