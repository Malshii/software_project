const Joi = require('joi')
const mongoose = require('mongoose')

const patientSchema  = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password : { 
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
})

function validateUser(patient) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(patient, schema);
}

const Patient = mongoose.model('Patient', patientSchema)

module.exports = Patient;
module.exports.validate = validateUser;

