const mongoose = require('mongoose')

const paymentSchema  = new mongoose.Schema({   
       
  
    amount: {
        type: Number,
        required:true
    },
    currency: {
        type: String,
        required: true
    },

    customer:{
        type: String,
        required:true
    },

    receiptEmail:{
        type: String,
        required: true
    } ,
    paymentId:{
        type: String,
        required: true
    },
    paymentDate:{
        type:Date,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

const PaymentMethod = mongoose.model("payment",paymentSchema);
module.exports = PaymentMethod ;
