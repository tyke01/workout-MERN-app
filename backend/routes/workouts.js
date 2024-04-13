const express = require('express')
// const Workout = require('../models/workoutModel')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const router = express.Router()


// get all workouts
router.get('/', getWorkouts)

// get a single workout
router.get('/:id', getWorkout)


// post a new workout
router.post('/', createWorkout)


// delete a single new workout
router.delete('/:id', deleteWorkout)


// update a new workout
router.patch('/:id', updateWorkout)


module.exports = router
