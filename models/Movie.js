const { Schema, model } = require("mongoose");

const MovieSchema = Schema({
  imdbID: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  favorite: {
    type: Boolean,
    required: true,
  },
  uid: {
      type: Number
  }
});

module.exports = model("Movie", MovieSchema);
