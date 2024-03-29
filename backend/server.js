
require('dotenv').config()
const express = require('express')

const workoutRoutes =require('./routes/workouts')




// express app
const app = express()


// middleware
app.use((res, req, next) => {
    console.log(req.path, req.method)
    next()
})


// routes
app.use('/api/workouts', workoutRoutes)


// listen for request
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
})

