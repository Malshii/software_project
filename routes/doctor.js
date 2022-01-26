const router = require("express").Router();
const req = require("express/lib/request");
const res = require("express/lib/response");
const { findById, findOne } = require("../modles/doctor");
let Doctor =require("../modles/doctor");

router.route("/add").post((req,res)=>{
    const name= req.body.name;
    const NIC_no=req.body.NIC_no;
    const workingHospital=req.body.workingHospital;
    console.log("data come to back");
    const newDoctor =new Doctor({
        name,
        NIC_no,
        workingHospital
    })

    newDoctor.save().then(()=>{
        res.json("Doctor Added");
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Doctor.find().then((doctors)=>{
        res.json(doctors);
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:doctorId").put(async(req,res)=>{
    let userId = req.params.doctorId;
    const {name,NIC_no,workingHospital}=req.body;//take details for variables
    const updateDoctor={
        name,
        NIC_no,
        workingHospital
    }
     //updateDoctor={name,NIC_no,workingHospital}
    const update = await Doctor.findByIdAndUpdate(userId,updateDoctor).then(()=>{
        res.status(200).send({status:"user updated", user : update});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status :"Error with updating data" , error : err.message});
    })
    
    
})

router.route("/delete/:doctorId").delete(async(req,res)=>{
    let userId = req.params.doctorId;
    await Doctor.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"user deleted"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status :"Error with deleted doctor" , error : err.message});
    })
})

router.route("/delete/:doctorId").get(async(req,res)=>{
    let userId = req.params.doctorId;
    //await findOne(email)
    const user = await findById(userId).then(()=>{
        res.status(200).send({status:"user fetched", user : update});        
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status :"Error with fetched doctor" , error : err.message});
    })
})

module.exports =router;