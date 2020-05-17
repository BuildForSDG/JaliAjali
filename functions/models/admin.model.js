const mongoose = require('mongoose');
const uuid4 = require('uuid/v4');

const schema = mongoose.Schema;


const adminSchema = new schema(
  {
    uid: {
      type: String,
      default: uuid4(),
      unique: true
    },
    firstName: {
      type: String,
      required: false,
      unique: false
    },
    lastName: {
      type: String,
      required: false,
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
    isAdmin: {
      type: Boolean,
      required: false,
      default: false
    },
    resetPasswordToken: {
      type: String
    },
    resetPasswordExpires: {
      type: Date
    },
    verifyToken: {
      type: String
    },
    isVerified: {
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