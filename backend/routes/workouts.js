const express = require('express')
const router = express.Router()


// get all workouts
router.get('/', (req, res) => {

    res.json({ mssg: 'get all workouts' })
})

// get a single workout
router.get('/:id', (res, req) => {
    res.json({ mssg: 'get a single workouts' })
})


// post a new workout
router.post('/', (req, res) => {
    res.json({ mssg: 'post a workout' })
})


// delete a single new workout
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'delete a workout' })
})


// update a new workout
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'update a workout' })
})


module.exports = router
