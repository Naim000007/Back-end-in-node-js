const express = require("express");
const app = express();
const userModel = require("./routes/user");

app.set("view engine", "ejs");
app.use(express.static("./public"));

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/create", async function (req, res) {
    const createduser = await userModel.create({
    username: "Naim Sheikh",
    name: "Naim",
    age: 23,
  });
  res.send(createduser)
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
