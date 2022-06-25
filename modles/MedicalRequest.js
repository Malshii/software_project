const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const medicalreqSchema=new Schema({
    
    User_id:{
        type:String,
        
    },

    Doc_id:{
        type:String,
        
    },
    appoinment_id:{
        type:String,
        
    },
    workingplace:{
        type:String,
        
    },
   
    medical_status:{
        type:String,
        
    },
    first_name:{
        type:String,
        
    },
    last_name:{
        type:String,
        
    },
    address:{
        type:String,
        
    },
    Imageurl:{
        type:String,
        
    },
    reqestedDate:{
        type :Date,
        
    },
    Effected_Date:{
        type :Date,
        
    }

    
})

const Medicalreq=mongoose.model("Medicalreq",medicalreqSchema);

module.exports=Medicalreq;