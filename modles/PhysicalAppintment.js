const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const physicalAppointmantSchema=new Schema({
   
    specialization:{
        type:String,
        required: true
    },

    doctorname:{
        type:String,
        required: true
    },

    date:{
        type:Date,
        required: true
    },

    charges:{
        type:Number,
        required: true
    },

    firstname:{
        type:String,
        required: true
    },

    lastname:{
        type:String,
        required: true
    },

    age:{
        type:Number,
        required: true
    },

    mobileno:{
        type:Number,
        required: true
    },

    address:{
        type:String,
        required: true
    },
    Doc_id:{
        type:String,
        required: true
    },
    patientId:{
        type:String,
        required: true
    },
    markstatus1:{
        type:String,
        required: true
    }
})
/*Doc_id
:"62b05bd025c59c8cdd5bc318"
patientId
:
"62b0ee748e1a2b8fb0751ece"
status
:
"enable" */
const PhysicalAppintment=mongoose.model("physicalAppointment",physicalAppointmantSchema);

module.exports=PhysicalAppintment;