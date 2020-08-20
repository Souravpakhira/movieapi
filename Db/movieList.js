const mongoose = require("mongoose");

const movie = new mongoose.Schema({
  name: {
    type: String,
  },
  img: {
    type: String,
  },
  summary: {
    type: String,
  },
});

module.exports = Movie = mongoose.model("movie", movie);
