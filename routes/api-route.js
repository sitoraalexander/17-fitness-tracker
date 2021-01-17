const router = require('express').Router();
const Workouts = require('../models/workouts.js');

router.post("/api/workouts", (req, res) => {
    Workouts.find({})
    .sort({ date: 1 })
    .then(dbWorkout => {
      res.send(dbWorkout);
    })
    .catch(err => {
      res.status(400).send(err);
    });
})

router.put("/api/workouts/:id", ({body,params}, res) => {
    Workouts.findByIdAndUpdate( 
            params.id,
            { $push: {exercises : body} },
            { new : true, runValidators: true }
            )
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err =>{
                res.json(err);
            })
});

router.get("/api/workouts", (req, res) => {
    Workouts.find()
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err =>{
        res.json(err);
    })
   
});

router.get("/api/workouts/range", (req, res) => {
    Workouts.find({}).limit(7)
    .then(dbWorkouts => {
        console.log(dbWorkouts)
        res.json(dbWorkouts);
    })
    .catch(err =>{
        res.json(err);
    })
  
 
})

router.delete("/api/workouts", ({ body }, res) => {
    Workouts.findByIdAndDelete(body.id)
    .then(()=>{

        res.json(true);
    })
    .catch(err =>{
        res.json(err);
    })
    
})


module.exports =router;