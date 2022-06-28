const { genSaltSync, hashSync } = require('bcrypt');
const User = require('../models/user.model');
const Doctor = require('../models/doctor.profile.model');
const Token = require('../models/token.model');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');
const { forgotPassword } = require('./user.service');

module.exports = {
  staffSignupUser: async (data) => {
    const salt = genSaltSync(10); //hashing password to save the user
    data.password = hashSync(crypto.randomBytes(10).toString('hex'), salt);

    const dob = data.dob.slice(0, 10);
    data.dob = dob;

    console.log(data);
    const user = new User(data);
    const isExist = await User.findOne({ email: data.email });
    if (isExist) {
      return { success: false, message: 'User is already exist' };
    }
    //Register the staff member
    const registeredUser = await user.save();
    console.log('registered user', registeredUser);

    //Create a profile in the respective collection
    const doctor = new Doctor({
      doctor_id: registeredUser._id,
      registrationNumber: '',
      degree: '',
      experience: '',
      workingHospital: '',
      address: '',
      chargePerPatient: '',
      languages: '',
      category: '',
    });
    await doctor.save();
    const result = await forgotPassword(data);
    return result;
  },
};
