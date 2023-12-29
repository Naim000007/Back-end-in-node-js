import express from "express"

const app = express();

const port = 5000;

app.get('/',(req, res)=>{
    res.send('hello this is home page')
})

app.listen(port,() => {
    console.log(`Example app listening at http://localhost:${port}`)
  } )