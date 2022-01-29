const { emit } = require("../db/doctorRedistrationDB");
const express = require('express');
let Patient = require("../db/doctorRedistrationDB");

//Add patient
exports.doctorRegistration = async (req, res) => {
    // Check if this user already exists
    let doctor = await doctor.findOne({ email: req.body.email });
    if (doctor) {
        return res.status(400).send('That user already exisits!');
    } else {
        // Insert the new user if they do not exist yet
        doctor = new Patient({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            NIC_no :req.body.NIC_no,
            workingHospital:req.body.workingHospital
        });
        await doctor.save();
        res.send(doctor);
    }
} 

//Read All
exports.getAlldoctors = async (req,res) => {
    doctor.find().then((doctor)=>{
        res.json(doctor)
    }).catch((err)=>{
        console.log(err)
    })
}

//Read one
exports.getdoctor = async (req,res) => {
    let email = req.params.email;    
    const doctor = await doctor.findOne({email:email})
    .then((doctor)=>{
        res.status(200).send({status: "user fetched",user:doctor})
    }).catch((err)=>{
        console.log(err.message);
        res.status(400).send({status:"Error with get user",error:err.message});
    })
}

//Update
exports.updatedoctor = async (req,res) => {    
    //fetch email to update
    let email = req.params.email;
    //what need to update
    const {name,password,NIC_no,workingHospital} = req.body;
    
    //after updated assign new value
    const updatedoctor = {name,password,NIC_no,workingHospital} 

    const update = await doctor.findOneAndUpdate({email:email},updatedoctor)
    .then((update)=>{
        res.status(200).send({status: "Doctor details updated",user:update})
    }).catch((err)=>{
        console.log(err);
        res.status(400).send({status:"Error with updating data",error:err.message});
    })
}

//Delete
exports.delete_doctor = async (req,res) => {
    let email = req.params.email;
    await doctor.findOneAndDelete(email).then(()=>{
        res.status(200).send({status:"User deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user",error:err.message});
    })
}


