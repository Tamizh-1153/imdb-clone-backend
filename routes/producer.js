const express = require("express")
const router = express.Router()
const authenticateUser = require("../middleware/authentication")

const {
  addProducer,
  getAllProducers,
  getProducer,
} = require("../controllers/producer")

router.route("/add").post(authenticateUser,addProducer)
router.route("/all").get(getAllProducers)
router.route("/:id").get(getProducer)

module.exports = router
