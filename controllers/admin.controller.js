const Joi = require('joi');
const User = require('../models/user.model');
const { staffSignupUser } = require('../services/admin.service');
const { genSaltSync, hashSync } = require('bcrypt');

module.exports = {
  StaffRegisterUser: async (req, res) => {
    const schema = Joi.object({
      role: Joi.string().required(),
      firstName: Joi.string().min(5).max(50).required(),
      lastName: Joi.string().min(5).max(50).required(),
      email: Joi.string().email().required(),
      phoneNumber: Joi.number().required(),
      dob: Joi.date().raw().required(),
    });
    const validation = schema.validate(req.body);

    if (validation.error) {
      res.status(400).send({ message: validation.error.message });
      return;
    }
    const data = validation.value;
    const result = await staffSignupUser(data);
    console.log('resulttttt', result);
    if (result.success) {
      return res.status(200).json({
        success: true,
        message: 'Doctor has been successfully registered!',
        result: result.result,
      });
    } else {
      return res.status(400).send({ message: result.message });
    }
  },
};
