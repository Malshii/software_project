const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({         
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
    id: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user' 
    }]  
})

const Doctor = mongoose.model("doctor",doctorSchema);
module.exports = Doctor;

