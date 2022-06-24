const express = require("express");
const router = express.Router();
const onlinePatientProfileController = require("../controllers/onlinePatient.profile.controller");
const onlinePatientProfileService = require("../services/onlinePatient.profile.service")
const onlinePatientProfile = require("../models/onlinePatient.profile.model")

//Add Online patient profile 
//localhost:4000/onlinePatient/addOnline
router.post('/addOnline', onlinePatientProfileController.OnlinePatientProfile);

//Get All Online patient profile 
//localhost:4000/onlinePatient/displayOnline
router.get('/displayOnline', onlinePatientProfileService.findAllOnlinePatientProfile);

//Get One Online Patient profile 
//localhost:4000/onlinePatient/onlineprofile/:id
router.get('/onlineprofile/:id', onlinePatientProfileService.findOneOnlinePatientProfile);
 
//Update one Online Patient profile 
//localhost:4000/onlinePatient/onlineprofile/:id
router.put('/onlineprofile/:email', onlinePatientProfileService.UpdateOneOnlinePatientProfile);

//Delete one Online Patient profile 
//localhost:4000/onlinePatient/onlineprofile/:id
router.delete('/onlineprofile/:id', onlinePatientProfileService.DeleteOneOnlinePatientProfile);


//https://localhost:4000/onlinePatient/get/:doctorname
//Read one fetch
router.route("/get/:doctorname").get(async(req,res)=>{
    let doctorname = req.params.doctorname;
    const user = await onlinePatientProfile.findOne()
    .then((user)=>{
        res.status(200).send({status: "user fetched",user:user})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user",error:err.message});
    }) 
})


module.exports = router;
 