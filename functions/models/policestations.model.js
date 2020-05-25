const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const schema = mongoose.Schema;

const policeStationsSchema = new schema(
  {
    stationName: {
        type: String
    },
    contactNumber: {
      type: Number
    },
    location: {
      type: String,
      required: false
    },
  }
);

policeStationsSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Station', policeStationsSchema)