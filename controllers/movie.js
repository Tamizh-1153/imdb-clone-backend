const Movie = require("../models/movie")
const Actor = require("../models/actor")
const Producer = require("../models/producer")

const addMovie = async (req, res) => {
  const {movieDetails} = req.body
  const producer =await Producer.find({})
  try {
    const movie = await Movie.create({ ...movieDetails })
    res.json(movie)
  } catch (error) {
    res.json(error.message)
  }
}

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find()
    res.json(movies)
  } catch (error) {
    res.json(error.message)
  }
}

const getMovie = async (req, res) => {
  const id = req.params
  try {
    const movie = await Movie.find({ _id: id })
    res.json(movie)
  } catch (error) {
    res.json(error.message)
  }
}

const updateMovie = async (req, res) => {
  const id = req.params
  try {
    const movie = await Movie.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    )
    res.json(movie)
  } catch (error) {
    res.json(error.message)
  }
}

const deleteMovie = async (req, res) => {
  const id = req.params
    try {
        const movie = await Movie.delete({ _id: id })
        console.log(movie)
        res.json({ message:'Movie deleted successfully'})
    } catch (error) {
        res.json(error.message)
    }
}

module.exports = {
  addMovie,
  getAllMovies,
  getMovie,
  updateMovie,
  deleteMovie
}
