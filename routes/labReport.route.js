const router= require("express").Router();
const labReport = require("../models/labReport.model");
router.route("/add").post((req,res)=>{

    const patientname=req.body.patientname;
    const reciep_no=req.body.reciep_no;
    const collectedDate=req.body.collectedDate;
    const age=Number(req.body.age);
    const gender=req.body.gender;
    const address=req.body.address;
    const labReportDescription=req.body.labReportDescription;
    const isseedDate=req.body.isseedDate;
    
    const newlabReport=new labReport({

        patientname,
        reciep_no,
        collectedDate,
        age,
        gender,
        address,
        labReportDescription,
        isseedDate
    
    })

//data add 
newlabReport.save().then(()=>{
        res.json("lab certificate details Added")
    }).catch((err)=>{
        console.log(err);
    })

})
//read data
router.route("/").get((req,res)=>{

    Lab.find().then((lab)=>{
        res.json(lab)
    }).catch((err)=>{
        console.log(err);
    })
})
//update
router.route("/update/:id").put(async(req,res)=>{
    let labReportId=req.params.id;
    const{patientname,reciep_no,collectedDate,age,gender,address,labReportDescription,isseedDate}=req.body;

    const updateLabReport={
        patientname,
        reciep_no,
        collectedDate,
        age,
        gender,
        address,
        labReportDescription,
        isseedDate
    }

    const update=await Lab.findByIdAndUpdate(labReportId,updateLabReport).then(()=>{
        res.status(200).send({status:"Lab report details update"})
    }).catch((err)=>{
        res.status(500).send({status:"error with updating data",error:err.message});
    })
})
//delete

router.route("/delete/:id").delete(async(req,res)=>{
    let labReportId = req.params.id;

    await Lab.findByIdAndDelete(labReportId)
    .then(()=>{
        res.status(200).send({status:"Lab report deleted"});
    }).catch((err)=>{
        res.status(500).send({status:"error with delete Lab report",error:err.message});
    })
})

//get one user data

router.route("/get/:id").get(async(req,res)=>{
    let labReportId = req.params.id;
    const Lab=await Lab.findById(labReportId) 
    .then((m)=>{
        res.status(200).send({status:"User fetched",m})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error with get user",error:err.message})
    })
})


module.exports=router;