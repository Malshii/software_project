const mongoose = require('mongoose')
//const Role = require('../role')

const staffSchema  = new mongoose.Schema({        
    firstName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    lastName: {
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
    phoneNumber:{
        type: Number,
        required:true
    },
    dob: {
        type: Date,
        required: true
    },
    password : { 
        type: String,              
        minlength: 5,
        required: true 
    },       
})

const StaffDoctor = mongoose.model('doctor',staffSchema);
const StaffAdmin = mongoose.model('admin',staffSchema);
const StaffReceptionist = mongoose.model('receptionist',staffSchema);
const StaffLabAssisatnt = mongoose.model('lab assistant',staffSchema);

module.exports = {
    StaffDoctor : StaffDoctor,
    StaffAdmin : StaffAdmin,
    StaffReceptionist : StaffReceptionist,
    StaffLabAssisatnt : StaffLabAssisatnt
}
