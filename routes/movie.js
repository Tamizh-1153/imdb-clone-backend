const express = require("express")
const router = express.Router()

const {
  addMovie,
  getAllMovies,
  getMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movie")

router.route("/add").post(addMovie)
router.route("/all").get(getAllMovies)
router.route("/:id").get(getMovie)
router.route("/:id").post(updateMovie)
router.route("/delete/:id").delete(deleteMovie)

module.exports = router
