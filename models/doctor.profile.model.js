const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  doctor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  registrationNumber: {
    type: String,
  },
  degree: {
    type: String,
    maxlength: 50,
  },
  experience: {
    type: String,
    maxlength: 50,
  },
  workingHospital: {
    type: String,
  },
  address: {
    type: String,
  },
  chargePerPatient: {
    type: Number,
  },
  languages: {
    type: String,
    maxlength: 50,
  },
  category: {
    type: String,
    maxlength: 50,
  },
});

const Doctor = mongoose.model('doctor', doctorSchema);
module.exports = Doctor;
