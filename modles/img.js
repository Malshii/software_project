const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const imgURLaddSchema=new Schema({
    
    reciptNumber:{
        type:String,
        required: true
    },

    ImgURL:{
        type:String,
        required: true
    }
    
})

const imgURLadd=mongoose.model("img",imgURLaddSchema);

module.exports=imgURLadd;