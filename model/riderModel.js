const mongoose = require('mongoose');
const validator = require('validator');

const riderSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'A rider must have a name']
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
    required: [true, 'Rider must have age']
  },
  address: {
    type: String,
    required: [true, 'Rider must have address']
  },
  phone: {
    type: String,
    required: true,
    minlength: [11, 'Phone number must be of 11 digit']
  },
  licenceImg: {
    type: String,
    required: [true, 'Rider must have driving licence image']
  },
  area: {
    type: String,
    required: [true, 'Must have area']
  },
  nidImg: {
    type: String,
    required: [true, 'Rider must have NID image']
  },
  profileImg: {
    type: String,
    required: [true, 'Rider must have profile image']
  },
  vehicleName: {
    type: String,
    required: [true, 'A vehicle must have a name'],
    trim: true
  },
  vehicleType: {
    type: String,
    required: [true, 'A vehicle must have type']
  },
  model: {
    type: String,
    required: [true, 'A vehicle must have a model']
  },
  namePalate: {
    type: String,
    required: [true, 'A vehicle must have a name palate']
  },
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
  }
});

const Rider = mongoose.model('Rider', riderSchema);

module.exports = Rider;
