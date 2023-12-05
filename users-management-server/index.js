const express = require('express')
const cors = require('cors');
 

const app = express();


const port = process.env.PORT || 5000;
app.use(cors());

const user = [
    {id:1, name: 'sabana', email:'sabana@gmail.com'},
    {id:2, name: 'sabnoor', email:'sabnoor@gmail.com'},
    {id:3, name: 'sabila', email:'sabila@gmail.com'},
    {id:4, name: 'sabila', email:'sabila@gmail.com'},
    {id:5, name: 'sabila', email:'sabila@gmail.com'},
    {id:6, name: 'sabila', email:'sabila@gmail.com'},
    {id:7, name: 'sabila', email:'sabila@gmail.com'},
    {id:8, name: 'sabila', email:'sabila@gmail.com'},
    {id:9, name: 'sabila', email:'sabila@gmail.com'},
]

app.get('/user', (req, res)=>{
    res.send(user)
})

app.post('/user', (req, res)=>{
    console.log(req.body);
})


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