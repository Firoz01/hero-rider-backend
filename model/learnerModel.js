const mongoose = require('mongoose');
const validator = require('validator');

const learnerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'A Learner must have a name']
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  age: {
    type: Number,
    required: [true, 'Learner must have age']
  },
  address: {
    type: String,
    required: [true, 'Learner must have address']
  },
  phone: {
    type: String,
    required: true,
    minlength: [11, 'Phone number must be of 11 digit']
  },
  nidImg: [
    {
      type: String,
      required: [true, 'Learner must have NID image']
    }
  ],
  profileImage: [
    {
      type: String,
      required: [true, 'Learner must have profile image']
    }
  ],
  password: {
    type: String,
    required: true,
    select: false,
    minlength: [4, 'A password should have atleast 4 characters']
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same!'
    }
  },
  vehicleType: {
    type: String,
    required: [true, 'A vehicle must have type']
  }
});

const Learner = mongoose.model('Rider', learnerSchema);

module.exports = Learner;
