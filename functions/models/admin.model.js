const mongoose = require('mongoose');
const uuid4 = require('uuid');
const uniqueValidator = require('mongoose-unique-validator');

const schema = mongoose.Schema;


const adminSchema = new schema(
  {
    uid: {
      type: String,
      default: uuid4(),
      unique: true
    },
    first_name: {
      type: String,
      required: true,
      unique: false
    },
    last_name: {
      type: String,
      required: true,
      unique: false
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    is_admin: {
      type: Boolean,
      required: false,
      default: false
    },
    reset_password_token: {
      type: String
    },
    reset_password_expires: {
      type: Date
    },
    verify_token: {
      type: String
    },
    is_verified: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  }
);

adminSchema.methods.isPasswordValid = (password, savedPassword) => {
  const compare = bcrypt.compareSync(password, savedPassword);
  return compare;
};

adminSchema.plugin(uniqueValidator);
const userModel = mongoose.model('admin', adminSchema, 'admin');

module.exports = userModel;