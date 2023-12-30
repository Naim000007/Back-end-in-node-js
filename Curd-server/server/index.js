const express = require('express');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB using mongoose
mongoose.connect('mongodb+srv://Naim:Naim123@curd.gploutp.mongodb.net/userDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a mongoose schema for the User model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Create a mongoose model based on the schema
const User = mongoose.model('User', userSchema);

app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    console.log('new user', user);

    const result = await user.save(); // Save the user to the database

    res.send(result);
  } catch (error) {
    console.error('Error processing user request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

















// const express = require('express');
// const cors = require('cors');
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const port = process.env.PORT || 5000;
// const app = express()


// //middleware
// app.use(cors())
// app.use(express.json())// to get req.body from post


// const uri = "mongodb+srv://Naim:Naim123@curd.gploutp.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();

//     const database = client.db("userDB");
//     const UserCollection = database.collection("users");


//     app.post('/users', async(req, res)=>{
//       const user = req.body;
//       console.log('new user',user);
//       const result = await UserCollection.insertOne(user)
//       res.send(result)
//     })


//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);



// app.get('/', (req, res)=>{
//     res.send( 'Curs is Running')
// })

// app.listen(port , ()=>{
//     console.log(`curd is running on ${port}`);
// })

// const express = require('express');
// const port = process.env.PORT || 5000;
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express()

// app.use(cors())
// app.use(express.json())

// mongoose.connect(`mongodb+srv://Naim:Naim123@curd.gploutp.mongodb.net/?retryWrites=true&w=majority`)
// const database = client.db("userDB");
//     const UserCollection = database.collection("users");


//     app.post('/users', async(req, res)=>{
//       const user = req.body;
//       console.log('new user',user);
//       const result = await UserCollection.insertOne(user)
//       res.send(result)
//     })

// app.listen(port, ()=>{
//   console.log(`server is running on ${port}`)
// })
