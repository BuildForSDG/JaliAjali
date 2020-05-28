const uuid = require('uuid');

const Accident = require('../models/accident.model');



module.exports = {
 async createAccidentCase(req,res){
   const {no_of_victims, device_type , location , latitude , longitude , description } =  req.body;

  const newAccident = new Accident({
    description,
    case_id: uuid(),
    no_of_victims,
    device_type,
    reportedTime: Date.now(),
    location: {
      submitted_location: location,
      latitude , 
      longitude
        }
    }); 

  try {

    let saveAccident = await newAccident.save();
    
    
    res.status(201).send({error:false,message:"Case recorded"})
    
  } catch (error) {
    console.log(error);
    res.status(500).send({error:true,message:"Oops Something went wrong !"})

  }



 }

}