const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const doctorSchema  = new Schema({
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
    },
    NIC_no :{
        type : String,
        required :true,
        unique:true
    },
    workingHospital :{
        type : String,
        required :true
    },
})

const doctor = mongoose.model("Doctor", doctorSchema);

module.exports = doctor;
