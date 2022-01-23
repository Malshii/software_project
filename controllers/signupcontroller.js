const express = require('express')
const { Patient, validate } = require('../models/signupmodel');

exports.signupUsers = async (req, res) => {
    // First Validate The Request
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

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

  
