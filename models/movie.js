const mongoose = require("mongoose")
const { Schema } = mongoose

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  yearOfRelease: {
    type: Date,
  },
  plot: {
    type: String,
  },
  poster: {
    type: String,
  },
  trailer: {
    type: String,
  },
  actors: {
    type: [Schema.Types.ObjectId],
    ref: "Actor",
  },
  producer: {
    type: Schema.Types.ObjectId,
    ref: "Producer",
  },
})

module.exports = mongoose.model("Movie", movieSchema)
