const Joi = require("joi");
const {scheduleAdd}  = require("../services/schedule.service");

module.exports = {
    Schedule : async (req,res) => {
        const schema = Joi.object({ 
          doctorId:Joi.string().required(),
          date:Joi.date().required(),
                                        
        });
        const validation = schema.validate(req.body);
        if (validation.error) {
            res.status(400).send({message: validation.error.message});
            return;
        } 
        const data = validation.value;
        try{
          const result = await scheduleAdd(data);          
          res.status(200).send({success:result});
        }catch(error){
          res.status(error.code || 409).send({message: error.message});
        }
    }
}
  