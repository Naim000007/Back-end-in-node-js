
const express = require('express');
const products_routes = require('./routes/products');
const connectDB = require('./db/connect');

const port = process.env.PORT || 5000
const app = express()

app.get('/', (req, res)=>{
    res.send(`Hi i am live`)
})

//middleware or to set router 
app.use('/api/products', products_routes)

const start = async()=>{
    try {
        await connectDB();
        app.listen(port , ()=>{
            console.log(`Server is running on ${port}`)
        })
    } catch (error) {
        console.log(error);
    }
}

start()