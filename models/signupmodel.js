const Joi = require('joi')
const mongoose = require('mongoose')

const patientSchema  = new mongoose.Schema({
    email : {  
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true        
    },
    userName : {
        type : String,        
    },
    password : { 
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
})

function validateUser(user) {
    const schema = {
        username: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(user, schema);
}

const Patient = mongoose.model('Patient', patientSchema)

module.exports = Patient;
module.exports.validate = validateUser;

