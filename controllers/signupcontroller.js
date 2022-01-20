const express = require('express')
const {validate,Patient} = require('../models/signupmodel');

exports.signupUsers = async function (req, res) {  

  //First validate the request
  const {error} = validate(req.body);
  if(error) {
      return res.status(400).send(error.details)
  }

  //Check if this user alreary exists
  let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('That user already exisits!');
    } else {
        // Insert the new user if they do not exist yet
        user = new User({             
            email : req.body.email,
            userName : req.body.userName,
            password : req.body.password
        });
        newPatient.save().then(()=>{
            res.json("Successfully Sign-Up in E-doc services")
        }).catch(()=>{
            console.log(err);
        })  
    }     
}