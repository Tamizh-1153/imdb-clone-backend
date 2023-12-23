const express = require("express")
const router = express.Router()
const authenticateUser = require("../middleware/authentication")
const { addActor, getAllActors, getActor } = require("../controllers/actor")

router.route("/add").post(authenticateUser,addActor)
router.route("/all").get(getAllActors)
router.route("/:id").get(getActor)

module.exports = router
