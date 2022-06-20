const express = require("express");
const router = express.Router();
const onlinePatientProfileController = require("../controllers/onlinePatient.profile.controller");
const onlinePatientProfileService = require("../services/onlinePatient.profile.service")

//Add Online patient profile 
//localhost:4000/profile/addOnlinePatient
router.post('/addOnline', onlinePatientProfileController.OnlinePatientProfile);

//Get All Online patient profile 
//localhost:4000/profile/displayOnline
router.get('/displayOnline', onlinePatientProfileService.findAllOnlinePatientProfile);

//Get One Online Patient profile 
//localhost:4000/profile/onlineprofile/:id
router.get('/onlineprofile/:email', onlinePatientProfileService.findOneOnlinePatientProfile);

//Update one Online Patient profile 
//localhost:4000/profile/onlineprofile/:id
router.put('/onlineprofile/:email', onlinePatientProfileService.UpdateOneOnlinePatientProfile);

//Delete one Online Patient profile 
//localhost:4000/profile/onlineprofile/:id
router.delete('/onlineprofile/:email', onlinePatientProfileService.DeleteOneOnlinePatientProfile);



module.exports = router;
 