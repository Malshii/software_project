const router= require("express").Router();
//const multer=require("multer");
let Medicalreq=require("../modles/MedicalRequest");
router.route("/add").post((req,res)=>{

    const User_id=req.body.User_id;
    const Doc_id=req.body.Doc_id;
    const appoinment_id=req.body.appoinment_id;
    const workingplace=req.body.workingplace;
    const medical_status=req.body.medical_status;
    const reqestedDate=req.body.reqestedDate;
    

    const newmedicalreq=new Medicalreq({

        User_id,
        Doc_id,
        appoinment_id,
        workingplace,
        medical_status,
        reqestedDate
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
    const{User_id,Doc_id,appoinment_id,workingplace,medical_status,reqestedDate}=req.body;

    const updateMedicalreq={
        User_id,
        Doc_id,
        appoinment_id,
        workingplace,
        medical_status,
        reqestedDate
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