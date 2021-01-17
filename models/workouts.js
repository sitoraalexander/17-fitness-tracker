const mongoose = require("mongoose");

const Schema = mongoose.Schema;

 

const workoutSchema = new Schema(
  {
  day: {
    type : Date,
  default : () => new Date()
},
  exercises:[
    {
    type: {
      type: String,
      trim: true,
      required: "Enter an Exercises type"
    },
  
    name: {
      type: String,
      trim: true,
      required: "Enter Exercises Name"
    },
  
    duration: {
      type: Number,
      required: "Enter the Duration of the Exercise"
    },
  
    weight: {
      type: Number,
   
    },
  
    reps: {
      type: Number,
 
    },
  
    sets: {
      type: Number,
    
    },
    distance: {
      type: Number,
    
    }
  
    }

  ]
},
{
  toJSON: {
    
    virtuals:true
  }
}

);


  
  workoutSchema.virtual("totalDuration").get(function(){

    return this.exercises.reduce((total, exercise)=>{

      return total + exercise.duration;
    },0)
  })


const Workouts = mongoose.model("workouts", workoutSchema);

module.exports = Workouts;