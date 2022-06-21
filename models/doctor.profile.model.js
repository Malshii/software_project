const mongoose = require('mongoose')

const profileSchema  = new mongoose.Schema({  
    type:{
        type: String,
        default: "Dr",
    },         
    fullName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    registrationNumber:{
        type:String,
        required: true
    },
    university:{
        type:String,
        required: true
    },    
    degree:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    experience:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    workingHospital:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    chargePerPatient:{
        type:Number,
        required: true
    },
    languages:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    category:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },    
    phoneNumber:{
        type: Number,
        required:true
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
        minlength: 5,
        required: true 
    },          
})

const DoctorProfile = mongoose.model("profile",profileSchema);
module.exports = DoctorProfile;
