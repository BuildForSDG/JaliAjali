const Accident = require('../models/accident.model');


module.exports = {
 async createAccidentCase(req,res){
   const {no_of_victims, deviceType , location } =  req.body;

  const newAccident = new Accident({
    no_of_victims,
    deviceType,
    reportedTime: Date.now(),
    location: {
      submitted_location: location
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