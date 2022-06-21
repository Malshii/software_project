const mongoose = require('mongoose')

const userSchema  = new mongoose.Schema({ 
    role: {
        type: String,        
        enum : ["patient", "doctor", "receptionist", "labAssistant"],        
    },  
    firstName: {
        type: String,        
        minlength: 5,
        maxlength: 50
    },
    lastName: {
        type: String,        
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,      
        unique: true
    },
    phoneNumber:{
        type: Number,        
    },
    dob: {
        type: Date,        
    },
    password : { 
        type: String,              
        minlength: 5,  
    },       
    registrationNumber:{
        type:String,        
    },
    university:{
        type:String,        
    },    
    degree:{
        type: String,        
        minlength: 5,
        maxlength: 50
    },
    experience:{
        type: String,        
        minlength: 5,
        maxlength: 50
    },
    workingHospital:{
        type:String,        
    },
    address:{
        type:String,        
    },
    chargePerPatient:{
        type:Number,        
    },
    languages:{
        type: String,       
        minlength: 5,
        maxlength: 50
    },
    category:{
        type: String,        
        minlength: 5,
        maxlength: 50
    },   
})


const User = mongoose.model("user",userSchema);
module.exports = User;

