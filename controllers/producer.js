const Producer = require('../models/producer')

const addProducer = async (req,res) => {
    const {producerDetails} = req.body
    try {
        const producer = await Producer.create({...producerDetails})
        res.json(producer)
    } catch (error) {
        res.json(error.message)
    }
}

const getAllProducers = async (req, res) => {
    try {
        const producers = await Producer.find()
        res.json(producers)
    } catch (error) {
        res.json(error.message)
    }
}

const getProducer = async (req, res) => {
    const id = req.params
    try {
        const producer = await Producer.find({_id:id})
        res.json(producer)
    } catch (error) {
        res.json(error.message)
    }
}

module.exports = {
    addProducer,
    getAllProducers,
    getProducer
}