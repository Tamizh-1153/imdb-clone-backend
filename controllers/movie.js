const Movie = require("../models/movie")

const addMovie = async (req, res) => {
  const {movieDetails} = req.body

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
  const {movieDetails}= req.body
  const {id} = req.params
  try {
    const movie = await Movie.findOneAndUpdate(
      { _id: id },
      { ...movieDetails},
      { new: true }
    )
    res.json(movie)
  } catch (error) {
    console.log(error);
    res.json(error.message)
  }
}

const deleteMovie = async (req, res) => {
  console.log(id);
    try {
        const movie = await Movie.findOneAndDelete({ _id: id })
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
