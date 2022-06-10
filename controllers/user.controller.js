const Joi = require("joi");
const {signupUser,loginUser}  = require("../services/user.service");

module.exports = {
      RegisterUser: async (req,res) => {
        const schema = Joi.object({            
            firstName : Joi.string().min(5).max(50).required(),
            lastName : Joi.string().min(5).max(50).required(),
            email : Joi.string().email().required(),
            phoneNumber : Joi.number().required(),
            dob : Joi.date().raw().required(),
            password : Joi.string().min(5).required(),
            confirmPassword : Joi.string().required().valid(Joi.ref('password'))                      
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
          res.status(200).send({success:result});
        }catch(error){
          res.status(error.code || 409).send({message: error.message});
        }
    },

    userLogin: async (req,res) => {
        const schema = Joi.object({
            email : Joi.string().email().required(),
            password : Joi.string().min(5).required(),
            type: Joi.string().allow("")
        });
        const validation = schema.validate(req.body);
        if (validation.error) {
            res.status(400).send({message: validation.error.message});
            return;
        }
        const body = validation.value;
        try {

            const {user, token} = await loginUser(body);

            return res.status(200).json({
                success: 1,
                message: "login Success",
                token, user
            });

        } catch (error) {
            res.status(error.code || 409).send({message: error.message});
        } 
    },    
}