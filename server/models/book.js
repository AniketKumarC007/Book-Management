const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
  
  },
  author: {
    type: String,
  },
  isbn: {
    type: String,

  },
  price: {
    type: Number,
   
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Book", bookSchema);
