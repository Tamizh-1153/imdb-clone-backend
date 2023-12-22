const Actor = require('../models/actor')

const addActor = async (req,res) => {
    const { actorDetails } = req.body
    try {
        const actor = await Actor.create({ ...actorDetails })
        res.json(actor)
    } catch (error) {
        res.json(error.message)
    }
}

const getAllActors = async (req, res) => {
    try {
        const actors = await Actor.find({})
        res.json(actors)
    } catch (error) {
        res.json(error.message)
    }
}

const getActor = async (req, res) => {
    const id =req.params
    console.log(id)
    try {
        const actor = await Actor.find({_id:id})
        res.json(actor)
    } catch (error) {
        res.json(error.message)
    }
}

module.exports = {
    addActor,
    getAllActors,
    getActor
}