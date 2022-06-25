const Joi = require("joi");
const {checkupDetailsAdd}  = require("../services/checkupDetails.service");

module.exports = {
  CheckupDetails : async (req,res) => {
        const schema = Joi.object({ 
          firstname:Joi.string().min(5).max(50).required(),
          lastname:Joi.string().min(5).max(50).required(),
          collectedDate:Joi.date().required(),
          dob:Joi.date().required(),
          age:Joi.number().required(),
          mobileno:Joi.number().required(), 
          email : Joi.string().email().required(), 
          address : Joi.string().required(),
          report_status : Joi.string().required(),   
          issuedDate:Joi.date(),  
          description : Joi.string(),                               
        });
        const validation = schema.validate(req.body);
        if (validation.error) {
            res.status(400).send({message: validation.error.message});
            return;
        } 
        const data = validation.value;
        try{
          const result = await checkupDetailsAdd(data);          
          res.status(200).send({success:result});
        }catch(error){
          res.status(error.code || 409).send({message: error.message});
        }
    }
}
  