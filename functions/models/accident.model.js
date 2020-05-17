const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const schema = mongoose.Schema; 
const accidentSchema = new schema(
  {
    case_id: {
      type: String,
      unique: true
    },
    no_of_victims: {
      type: String,
      required: true,
      unique: false
    },  
    device_type: {
      type: String,
      required: true,
      unique:false
    },
    reported_time: {
      type: Date,
      required: true
    },
    location: {
      submitted_location:{
        type:String,
        required:true
      },
      latitude:{
        type: Number,
        required:false
      },
      longitude:{
        type:Number,
        required:false
      }
    },
    weather_type: {
      type: String,
      required: false
    },
    description:{
      type:String,
      required:false
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  }
);


accidentSchema.plugin(uniqueValidator);
const accidentModel = mongoose.model('accident', accidentSchema, 'accident');

module.exports = accidentModel;



