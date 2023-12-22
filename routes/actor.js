const express = require("express")
const router = express.Router()

const { addActor, getAllActors, getActor } = require("../controllers/actor")

router.route("/add").post(addActor)
router.route("/all").get(getAllActors)
router.route("/:id").get(getActor)

module.exports = router
