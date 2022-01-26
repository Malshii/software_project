const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const doctorSchema = new Schema({
    // attributes of Doctors
    name :{
        type : String,
        required :true
    },
    NIC_no :{
        type : String,
        required :true,
        unique:true
    },
    workingHospital :{
        type : String,
        required :true
    }
})

const doctor = mongoose.model("Doctor",doctorSchema);
module.exports = doctor;