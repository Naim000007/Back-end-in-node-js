const express = require('express');
const app = express();

const port = 3000

app.get('/', (req, res)=>{
    res.send(`this is home page`)
})

app.get('/naim', (req, res)=>{
    res.send(`this is naim page`)
})

app.get('/mim', (req, res)=>{
    res.send(`this is mim pageeeee`)
})

app.get('/facebook', (req, res)=>{
    res.send(`this is facebook page mannnn`)
})

app.listen(port , (req, res)=>{
    console.log(`this code run on port ${port}`);
})