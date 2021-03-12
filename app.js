const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");
//Routes

app.get("/", (req, res) => {
  res.send("We are Home");
});

app.get("/posts", (req, res) => {
  res.send("We are on Posts!");
});

//How we start listening to the Server

app.listen(3000);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to Database");
});
