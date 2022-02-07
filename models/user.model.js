const mongoose = require('mongoose')

const userSchema  = new mongoose.Schema({    
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
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    password : { 
        type: String,              
        minlength: 5,        
        required: true 
    }
})

const User = mongoose.model("user",userSchema);
module.exports = User;
