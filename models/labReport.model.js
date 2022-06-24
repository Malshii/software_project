const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const labReportSchema=new Schema({
    
   

    patientname:{
        type:String,
        required: true
    },
   
    reciep_no:{
        type:String,
        required: true
    },

    collectedDate:{
        type:Date,
        required: true
    },

    age:{
        type:Number,
        required: true
    },

    gender:{
        type:String,
        required: true
    },
    
    address:{
        type:String,
        required: true
    },
   
   
    labReportDescription:{
        type:String,
        required: true
    },
    
    
    isseedDate:{
        type:Date,
        required: true
    }
    
})

const LabReport=mongoose.model("LabReport",labReportSchema);

module.exports=LabReport;