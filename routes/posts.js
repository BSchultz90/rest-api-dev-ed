const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("We are on Posts!");
});

router.get("/specific", (req, res) => {
  res.send("We are on a specific post!");
});

router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
