const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')

//database
const connectDB = require('./db/connectDB')

//routes
const userRouter = require('./routes/user')
const actorRouter = require('./routes/actor')
const movieRouter = require('./routes/movie')
const producerRouter = require('./routes/producer')

app.use(express.json())
app.use(cors())
app.use("/api/v1", userRouter)
app.use("/api/v1/actors", actorRouter)
app.use("/api/v1/movies", movieRouter)
app.use("/api/v1/producers", producerRouter)

app.get("/", (req, res) => {
  res.send("IMDB Clone backened")
})

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(5000,()=>console.log('Server is listening on port 5000...'))
    } catch (error) {
        console.log(error)
    }
}

start()