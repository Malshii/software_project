const { emit } = require("../models/patient.signup.model");
const express = require('express');
let Patient = require("../models/patient.signup.model");

//Add patient
exports.signupPatient = async (req, res) => {
    // Check if this user already exists
    let patient = await Patient.findOne({ email: req.body.email });
    if (patient) {
        return res.status(400).send('That user already exisits!');
    } else {
        // Insert the new user if they do not exist yet
        patient = new Patient({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        await patient.save();
        res.send(patient);
    }
} 

//Read All
exports.getAllPatients = async (req,res) => {
    Patient.find().then((patient)=>{
        res.json(patient)
    }).catch((err)=>{
        console.log(err)
    })
}

//Read one
exports.getPatient = async (req,res) => {
    let email = req.params.email;    
    const patient = await Patient.findOne({email:email})
    .then((patient)=>{
        res.status(200).send({status: "user fetched",user:patient})
    }).catch((err)=>{
        console.log(err.message);
        res.status(400).send({status:"Error with get user",error:err.message});
    })
}

//Update
exports.updatePatient = async (req,res) => {    
    //fetch email to update
    let email = req.params.email;
    //what need to update
    const {name,password} = req.body;
    
    //after updated assign new value
    const updatePatient = {name,email,password}

    const update = await Patient.findOneAndUpdate({email:email},updatePatient)
    .then((update)=>{
        res.status(200).send({status: "user updated",user:update})
    }).catch((err)=>{
        console.log(err);
        res.status(400).send({status:"Error with updating data",error:err.message});
    })
}

//Delete
exports.deletePatient = async (req,res) => {
    let email = req.params.email;
    await Patient.findOneAndDelete(email).then(()=>{
        res.status(200).send({status:"User deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user",error:err.message});
    })
}


