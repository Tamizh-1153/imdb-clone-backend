const mongoose = require("mongoose")
const { Schema } = mongoose

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  yearOfRelease: {
    type: Date,
    required: [true, "Please provide a release date"],
  },
  plot: {
    type: String,
    required: [true, "Please provide a plot"],
  },
  poster: {
    type: String,
    required: [true, "Please provide a poster"],
  },
  trailer: {
    type: String,
  },
  actors: {
    type: [Schema.Types.ObjectId],
    ref: "Actor",
    required: [true, "Please provide actors names"],
  },
  producer: {
    type: Schema.Types.ObjectId,
    ref: "Producer",
    required: [true, "Please provide a produce name"],
  },
})

module.exports = mongoose.model("Movie", movieSchema)
