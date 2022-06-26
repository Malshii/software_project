const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const offersSchema=new Schema({
    
    head:{
        type:String,
        required: true
    },

    description:{
        type:String,
        required: true
    },
    date:{
        type :Date,
        required: true
    }
    
})

const userOffers=mongoose.model("offers",offersSchema);

module.exports=userOffers;