const Joi = require('joi');
const User = require('../models/user.model');
const {
  signupUser,
  loginUser,
  updateUser,
} = require('../services/user.service');
const { genSaltSync, hashSync } = require('bcrypt');

module.exports = {
  // RegisterUser: async (req, res) => {
  //   const schema = Joi.object({      
  //     firstName: Joi.string().min(5).max(50).required(),
  //     lastName: Joi.string().min(5).max(50).required(),
  //     email: Joi.string().email().required(),
  //     phoneNumber: Joi.number().required(),
  //     dob: Joi.date().raw().required(),
  //     password: Joi.string().min(5).required(),
  //     confirmPassword: Joi.string().required().valid(Joi.ref('password')),
  //   });
  //   const validation = schema.validate(req.body);
  //   if (validation.error) {
  //     res.status(400).send({ message: validation.error.message });
  //     return;
  //   }
  //   const data = validation.value;
  //   try {
  //     const result = await signupUser(data);
  //     result.password = undefined;
  //     res.status(200).send({ success: result });
  //   } catch (error) {
  //     res.status(error.code || 409).send({ message: error.message });
  //   }
  // },
  RegisterUser: async (req,res) => {
    const schema = Joi.object({            
      role : Joi.string().required(),
      firstName: Joi.string().min(5).max(50).required(),
      lastName: Joi.string().min(5).max(50).required(),
      email: Joi.string().email().required(),
      phoneNumber: Joi.number().required(),
      dob: Joi.date().raw().required(),
      password: Joi.string().min(5).required(),
      confirmPassword: Joi.string().required().valid(Joi.ref('password')),                     
    });
    const validation = schema.validate(req.body);
    if (validation.error) {
        res.status(400).send({message: validation.error.message});
        return;
    } 
    const data = validation.value;
    try{
      const result = await signupUser(data);
      result.password = undefined;
      res.status(200).send({success:1,result});
    }catch(error){
      res.status(error.code || 409).send({message: error.message});
    }
  },
  AddDoctorProile: async (req,res) => {
    const schema1 = Joi.object({            
      role : Joi.string().required(),
      firstName: Joi.string().min(5).max(50).required(),
      lastName: Joi.string().min(5).max(50).required(),
      email: Joi.string().email().required(),
      phoneNumber: Joi.number().required(),
      dob: Joi.date().raw().required(),
      password: Joi.string().min(5).required(),
      confirmPassword: Joi.string().required().valid(Joi.ref('password')), 
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
      const result1 = await signupUser(data);
      result1.password = undefined;
      res.status(200).send({success:1,result1});
    }catch(error){
      res.status(error.code || 409).send({message: error.message});
    }
  },

  userLogin: async (req, res) => {
    // const schema = Joi.object({
    //   email: Joi.string().email().required(),
    //   password: Joi.string().min(5).required(),
    //   type: Joi.string().allow(''),
    // });
    // console.log(req.body);
    // const validation = schema.validate(req.body);
    // if (validation.error) {
    //   res.status(400).send({ message: validation.error.message });
    //   return;
    // }
    // const body = validation.value;

    const result = await loginUser(req.body);
    if (result.success) {
      return res.status(200).json({
        success: true,
        message: 'login Success',
        user: result.user,
      });
    } else {
      return res.status(400).send({ message: result.message });
    }
  },

  forgotPassword: async (req, res) => {
    //fetch userID to update
    //let userID = req.params.id;
    //what need to update
    const { email, password, confirmPassword } = req.body;

    //after updated assign new value
    const updatePatient = {
      email,
      password,
      confirmPassword,
    };

    const salt = genSaltSync(10); //hashing password to save the user
    updatePatient.password = hashSync(updatePatient.password, salt);

    await User.findOneAndUpdate({ email }, updatePatient)
      .then((update) => {
        res.status(200).send({ status: 'user updated', user: update });
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .send({ status: 'Error with updating data', error: err.message });
      });
  },
};
