const Joi = require('joi');
const {
  profileDoctor,
  getProfile,
} = require('../services/doctor.profile.service');

module.exports = {
  AddDoctorProile: async (req, res) => {
    const schema1 = Joi.object({
      id: Joi.object().required(),
      registrationNumber: Joi.string().required(),
      university: Joi.string().required(),
      degree: Joi.string().required(),
      experience: Joi.string().required(),
      workingHospital: Joi.string().required(),
      address: Joi.string().required(),
      chargePerPatient: Joi.number().required(),
      languages: Joi.string().required(),
      category: Joi.string().required(),
    });
    const validation1 = schema1.validate(req.body);
    if (validation1.error) {
      res.status(400).send({ message: validation1.error.message });
      return;
    }
    const data = validation1.value;
    try {
      const result1 = await profileDoctor(data);
      result1.password = undefined;
      res.status(200).send({ success: 1, result1 });
    } catch (error) {
      res.status(error.code || 409).send({ message: error.message });
    }
  },

  getProfile: async (req, res) => {
    const data = req.body;
    console.log('controller', data);
    const result = await getProfile(data);
    if (result.success) {
      return res.status(200).json({
        success: true,
        message: 'Doctor profile successfully fetched',
        user: result.profile,
      });
    } else {
      return res.status(400).send({ message: result.message });
    }
  },
};
