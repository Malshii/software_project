const router= require("express").Router();
//const {v4,uuid4}=require("uu")
//const multer=require("multer");
let Medicalreq=require("../modles/MedicalRequest");
router.route("/add").post((req,res)=>{

    const User_id=req.body.User_id;
    const Doc_id=req.body.Doc_id;
    const appoinment_id=req.body.appoinment_id;
    const workingplace=req.body.workingplace;
    const medical_status=req.body.medical_status;
    const first_name=req.body.first_name;
    const last_name=req.body.last_name;
    const address=req.body.address;//first_name//last_name//address
    const reqestedDate=req.body.reqestedDate;
    const Effected_Date=req.body.Effected_Date;
    const Imageurl=req.body.Imageurl;
    

    const newmedicalreq=new Medicalreq({

        User_id,
        Doc_id,
        appoinment_id,
        workingplace,
        medical_status,
        first_name,
        last_name,
        address,
        reqestedDate,
        Imageurl,
        Effected_Date
    })

//data add 
newmedicalreq.save().then(()=>{
        res.json("medical reqest details Added")
    }).catch((err)=>{
        console.log(err);
    })

})
//read data
router.route("/").get((req,res)=>{

    Medicalreq.find().then((medicalreq)=>{
        res.json(medicalreq)
    }).catch((err)=>{
        console.log(err);
    })
})
//update
router.route("/update/:id").put(async(req,res)=>{
    let medicalreqId=req.params.id;
    const{User_id,Doc_id,appoinment_id,workingplace,medical_status,first_name,last_name,address,reqestedDate,Imageurl,Effected_Date}=req.body;//first_name//last_name//address//Effected_Date

    const updateMedicalreq={
        User_id,
        Doc_id,
        appoinment_id,
        workingplace,
        medical_status,
        first_name,
        last_name,
        address,
        reqestedDate,
        Imageurl,
        Effected_Date
    }

    const update=await Medicalreq.findByIdAndUpdate(medicalreqId,updateMedicalreq).then(()=>{
        res.status(200).send({status:"Medical request details update"})
    }).catch((err)=>{
        res.status(500).send({status:"error with updating data",error:err.message});
    })
})
//delete

router.route("/delete/:id").delete(async(req,res)=>{
    let medicalreqId = req.params.id;

    await Medicalreq.findByIdAndDelete(medicalreqId)
    .then(()=>{
        res.status(200).send({status:"Medical request is deleted"});
    }).catch((err)=>{
        res.status(500).send({status:"error with delete medical request",error:err.message});
    })
})

//get one user data

router.route("/get/:id").get(async(req,res)=>{
    let medicalreqId = req.params.id;
    const medical=await Medical.findById(medicalreqId) 
    .then((m)=>{
        res.status(200).send({status:"User fetched",m})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error with get user",error:err.message})
    })
})





module.exports=router;