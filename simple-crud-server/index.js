const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json())
//mdnaim01910423877
//password: gjeppbVMXMz4JrUQ



const uri = "mongodb+srv://mdnaim01910423877:gjeppbVMXMz4JrUQ@cluster0.t7vfujm.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const database = client.db("usertDB");
    const UserCollection  = database.collection("user");

    app.post('/user', async(req, res)=>{
        const user = req.body ;
        console.log('new user', user);
        const result = await UserCollection.insertOne(user);
        res.send(result)

    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res)=>{
    res.send('simple curd is running')
})

app.listen(port, ()=>{
    console.log(`SIMPLE CRUD IS RUNNING ON PORT , ${port}`);
})