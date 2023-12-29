import express from "express"
import cors from 'cors'
const app= express();


const port = process.env.PORT || 5000;

//middleware
app.use(cors())
app.use(express.json())


const dataArray = [
    { id: 1, name: "Naim", address: "Dhaka, Bangladesh", email: "naim@gmail.com" },
    { id: 2, name: "Mim", address: "New York, USA", email: "mim@gmail.com" },
    { id: 3, name: "Anik", address: "London, UK", email: "anik@gmail.com" },
    { id: 4, name: "Rahul", address: "Tokyo, Japan", email: "rahul@gmail.com" },
    { id: 5, name: "Sara", address: "Paris, France", email: "sara@gmail.com" },
    { id: 6, name: "Aryan", address: "Berlin, Germany", email: "aryan@gmail.com" },
    { id: 7, name: "Riya", address: "Sydney, Australia", email: "riya@gmail.com" },
    { id: 8, name: "Arjun", address: "Toronto, Canada", email: "arjun@gmail.com" },
    { id: 9, name: "Farhan", address: "Dubai, UAE", email: "farhan@gmail.com" },
    { id: 10, name: "Zara", address: "Seoul, South Korea", email: "zara@gmail.com" }
  ];
   

app.get('/', (req, res)=>{
    res.send("This is home page")
})

app.get('/user', (req, res)=>{
    res.send(dataArray)
})
app.post('/user', (req, res)=>{
    console.log(`post api hitting`);
    console.log(req.body);
    const newUser = req.body;
    // const newUser.id =  dataArray.length+1;
    newUser.id = dataArray.length + 1;
    dataArray.push(newUser);
    res.send(newUser)
})

app.listen(port , ()=>{
    console.log(`Server started at http://localhost:${port}`)
})