const express = require('express')

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send('Hello World!!!!! User managenment server is running ')
})

app.get('/naim', (req, res)=>{
    res.send('naim sheikh')
})

app.get('/login', (req, res)=>{
    res.send(`<h1>Log in here</h1>`)
})

app.get('/facebook', (req, res)=>{
    res.send('Sheikh Naim')
})
 
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})