const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const patientSchema  = new Schema({
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

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
