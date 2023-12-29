const express = require('express');
const products_routes = require('./routes/products');

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res)=>{
    res.send(`hi i am live site`)
})

app.use('/api/products', products_routes)


app.listen(port , ()=>{
    console.log(`server is running on ${port}`)
})
// const start = async()=>{
//     try {
//         app.listen(port, ()=>{
//             console.log(`server is running on ${port}`)
//         })
//     } catch (error) {
//         console.log(error);
//     }

// }

// start()