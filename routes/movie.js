const express = require("express")
const router = express.Router()
const authenticateUser = require("../middleware/authentication")

const {
  addMovie,
  getAllMovies,
  getMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movie")

router.route("/add").post(authenticateUser,addMovie)
router.route("/all").get(getAllMovies)
router.route("/:id").get(getMovie)
router.route("/edit/:id").put(authenticateUser,updateMovie)
router.route("/delete/:id").delete(authenticateUser,deleteMovie)

module.exports = router
