// Data Schema for Posts.

const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//Exports the Schema to be used elsewhere in the project. * Imported in posts.js
module.exports = mongoose.model("Posts", postSchema);
