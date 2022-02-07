const Joi = require("joi");
const {
    signupDoctor,
    loginDoc, 
    signupAdmin,
    loginAdmin,
    signupRec,
    loginRec,
    signupLab,
    loginLab}  = require("../services/staff.service");
    
module.exports = {
    RegisterDoctor: async (req,res) => {
        const schema1 = Joi.object({            
            firstName : Joi.string().min(5).max(50).required(),
            lastName : Joi.string().min(5).max(50).required(),
            email : Joi.string().email().required(),
            phoneNumber : Joi.number().required(),
            dob : Joi.date().raw().required(),
            password : Joi.string().min(5).required(),
            confirmPassword : Joi.string().required().valid(Joi.ref('password')),                     
        });
        const validation1 = schema1.validate(req.body);
        if (validation1.error) {
            res.status(400).send({message: validation1.error.message});
            return;
        } 
        const data = validation1.value;
        try{
          const result1 = await signupDoctor(data);
          result1.password = undefined;
          res.status(200).send({success:1,result1});
        }catch(error){
          res.status(error.code || 409).send({message: error.message});
        }
    },
    RegisterAdmin: async (req,res) => {
        const schema2 = Joi.object({            
            firstName : Joi.string().min(5).max(50).required(),
            lastName : Joi.string().min(5).max(50).required(),
            email : Joi.string().email().required(),
            phoneNumber : Joi.number().required(),
            dob : Joi.date().raw().required(),
            password : Joi.string().min(5).required(),
            confirmPassword : Joi.string().required().valid(Joi.ref('password')),                      
        });
        const validation2 = schema2.validate(req.body);
        if (validation2.error) {
            res.status(400).send({message: validation2.error.message});
            return;
        } 
        const data = validation2.value;
        try{
          const result2 = await signupAdmin(data);
          result2.password = undefined;
          res.status(200).send({success:1,result2});
        }catch(error){
          res.status(error.code || 409).send({message: error.message});
        }
    },
    RegisterRec: async (req,res) => {
        const schema3 = Joi.object({            
            firstName : Joi.string().min(5).max(50).required(),
            lastName : Joi.string().min(5).max(50).required(),
            email : Joi.string().email().required(),
            phoneNumber : Joi.number().required(),
            dob : Joi.date().raw().required(),
            password : Joi.string().min(5).required(),
            confirmPassword : Joi.string().required().valid(Joi.ref('password')),                       
        });
        const validation3 = schema3.validate(req.body);
        if (validation3.error) {
            res.status(400).send({message: validation3.error.message});
            return;
        } 
        const data = validation3.value;
        try{
          const result3 = await signupRec(data);
          result3.password = undefined;
          res.status(200).send({success:1,result3});
        }catch(error){
          res.status(error.code || 409).send({message: error.message});
        }
    },
    RegisterLab: async (req,res) => {
        const schema4 = Joi.object({            
            firstName : Joi.string().min(5).max(50).required(),
            lastName : Joi.string().min(5).max(50).required(),
            email : Joi.string().email().required(),
            phoneNumber : Joi.number().required(),
            dob : Joi.date().raw().required(),
            password : Joi.string().min(5).required(),
            confirmPassword : Joi.string().required().valid(Joi.ref('password')),                      
        });
        const validation4 = schema4.validate(req.body);
        if (validation4.error) {
            res.status(400).send({message: validation4.error.message});
            return;
        } 
        const data = validation4.value;
        try{
          const result4 = await signupLab(data);
          result4.password = undefined;
          res.status(200).send({success:1,result4});
        }catch(error){
          res.status(error.code || 409).send({message: error.message});
        }
    },

    loginDoctor: async (req,res) => {
        const schema1 = Joi.object({
            email : Joi.string().email().required(),
            password : Joi.string().min(5).required(),
        });
        const validation1 = schema1.validate(req.body);
        if (validation1.error) {
            res.status(400).send({message: validation1.error.message});
            return;
        }
        const body = validation1.value;
        try {

            const {user1, token} = await loginDoc(body);

            return res.status(200).json({
                success: 1,
                message: "login Sucess",
                token, user1
            });

        } catch (error) {
            res.status(error.code || 409).send({message: error.message});
        } 
    },
    loginAdministrator: async (req,res) => {
        const schema2 = Joi.object({
            email : Joi.string().email().required(),
            password : Joi.string().min(5).required(),
        });
        const validation2 = schema2.validate(req.body);
        if (validation2.error) {
            res.status(400).send({message: validation2.error.message});
            return;
        }
        const body = validation2.value;
        try {

            const {user2, token} = await loginAdmin(body);

            return res.status(200).json({
                success: 1,
                message: "login Sucess",
                token, user2
            });

        } catch (error) {
            res.status(error.code || 409).send({message: error.message});
        } 
    },
    loginReceptionist: async (req,res) => {
        const schema3 = Joi.object({
            email : Joi.string().email().required(),
            password : Joi.string().min(5).required(),
        });
        const validation3 = schema3.validate(req.body);
        if (validation3.error) {
            res.status(400).send({message: validation3.error.message});
            return;
        }
        const body = validation3.value;
        try {

            const {user3, token} = await loginRec(body);

            return res.status(200).json({
                success: 1,
                message: "login Sucess",
                token, user3
            });

        } catch (error) {
            res.status(error.code || 409).send({message: error.message});
        } 
    },
    loginLabAssistant: async (req,res) => {
        const schema4 = Joi.object({
            email : Joi.string().email().required(),
            password : Joi.string().min(5).required(),
        });
        const validation4 = schema4.validate(req.body);
        if (validation4.error) {
            res.status(400).send({message: validation4.error.message});
            return;
        }
        const body = validation4.value;
        try {

            const {user4, token} = await loginLab(body);

            return res.status(200).json({
                success: 1,
                message: "login Sucess",
                token, user4
            });

        } catch (error) {
            res.status(error.code || 409).send({message: error.message});
        } 
    }

}