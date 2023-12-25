const mongoose = require("mongoose")
const { Schema } = mongoose

const producerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  gender: {
    type: String,
    required: [true, "Please provide a gender"],
  },
  dateOfBirth: {
    type: Date,
    required: [true, "Please provide a date of birth"],
  },
  bio: {
    type: String,
    required: [true, "Please provide a bio"],
  },
  movies: {
    type: [Schema.Types.ObjectId],
    ref: "Movie",
  },
})

module.exports = mongoose.model("Producer", producerSchema)
