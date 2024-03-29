
require('dotenv').config()

const mongoose = require('mongoose')

const express = require('express')

const workoutRoutes = require('./routes/workouts')



// express app
const app = express()


// middleware
app.use(express.json())

app.use((res, req, next) => {
    console.log(req.path, req.method)
    next()
})


// routes
app.use('/api/workouts', workoutRoutes)


// connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for request
        app.listen(process.env.PORT, () => {
            console.log('connected to DB & listening on port 4000')
        })
    })
    .catch((error) => { console.log(error) })




