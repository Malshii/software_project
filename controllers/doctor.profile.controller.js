const Joi = require("joi");
const {profileDoctor}  = require("../services/doctor.profile.service");

module.exports = {  
  AddDoctorProile: async (req,res) => {
    const schema1 = Joi.object({ 
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
        res.status(400).send({message: validation1.error.message});
        return;
    } 
    const data = validation1.value;
    try{
      const result1 = await profileDoctor(data);
      result1.password = undefined;
      res.status(200).send({success:1,result1});
    }catch(error){
      res.status(error.code || 409).send({message: error.message});
    }
  },
}