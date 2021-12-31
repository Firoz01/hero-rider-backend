const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
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
  }
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
