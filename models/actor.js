const mongoose = require("mongoose")
const { Schema } = mongoose

const actorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  gender: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  bio: {
    type: String,
  },
  movies: {
    type: [Schema.Types.ObjectId],
    ref: "Movie",
  },
})

module.exports = mongoose.model("Actor", actorSchema)
