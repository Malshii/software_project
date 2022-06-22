const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ['patient', 'doctor', 'receptionist', 'lab-assistant'],
  },
  firstName: {
    type: String,
    minlength: 5,
    maxlength: 50,
  },
  lastName: {
    type: String,
    minlength: 5,
    maxlength: 50,
  },
  email: {
    type: String,
    unique: true,
  },
  phoneNumber: {
    type: Number,
  },
  dob: {
    type: Date,
  },
  password: {
    type: String,
    minlength: 5,
  },
});

const User = mongoose.model('user', userSchema);
module.exports = User;
