import express from "express"
const port = process.env.PORT || 5000
const app = express()

app.get('/', (req, res)=>{
    res.send(`Hi i am live`)
})

const start = async()=>{
    try {
        app.listen(port , ()=>{
            console.log(`Server is running on ${port}`)
        })
    } catch (error) {
        console.log(error);
    }
}

start()