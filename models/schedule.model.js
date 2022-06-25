const mongoose = require('mongoose')

const scheduleSchema  = new mongoose.Schema({   
       
   
    doctorId: {
        type: String,
        required: true,
        
    },
    
    date:{
        type: Date,
        required:true
    },
    
    
})


const schedule=mongoose.model("Schedule",scheduleSchema);

module.exports=schedule;