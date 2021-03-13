const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");

app.use(express.json());
//Import Routes

const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//Routes

app.get("/", (req, res) => {
  res.send("We are Home");
});

//How we start listening to the Server

app.listen(3000);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to Database");
});
