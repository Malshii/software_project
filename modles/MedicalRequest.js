const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const medicalreqSchema=new Schema({
    
    User_id:{
        type:String,
        required: true
    },

    Doc_id:{
        type:String,
        required: true
    },
    appoinment_id:{
        type:String,
        required: true
    },
    workingplace:{
        type:String,
        required: true
    },
   
    medical_status:{
        type:String,
        required: true
    },
    reqestedDate:{
        type :Date,
        required: true
    }
    
})

const Medicalreq=mongoose.model("Medicalreq",medicalreqSchema);

module.exports=Medicalreq;