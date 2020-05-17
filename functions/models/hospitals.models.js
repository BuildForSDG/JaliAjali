const mongoose = require('mongoose');
const uuid = require('uuid/v4');

const schema = mongoose.Schema; 


const hospitalSchema = new schema(
  {
    name:{
      type:String,     
    },
    registration_number:{
      type:String
    },
    officialName:{
      type:String
    },
    keph_level:{
      type:String
    },
    facility_type:{
      type:String
    },
    facility_type_category:{
      type:String
    },
    owner:{
      type:String
    },
    owner_type:{
      type:String
    },
    regulatory_body:{
      type:String
    },
    beds:{
      type:Number
    },
    cots:{
      type:Number
    },
    county:{
      type:String
    },
    constituency:{
      type:String
    },
    sub_county:{
      type:String
    },
    ward:{
      type:String
    },
    open_whole_day:{
      type:Boolean
    },
    open_public_holiday:{
      type:Boolean
    },
    open_weekends:{
      type:Boolean
    },
    open_late_nights:{
      type:Boolean
    }

  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  }
);


hospitalSchema.plugin(uniqueValidator);
const hospitalModel = mongoose.model('hospital', hospitalSchema, 'hospital');

module.exports = hospitalModel;



