const express = require("express");
const router = express.Router();
const doctorProfileController = require("../controllers/doctor.profile.controller");
const doctorProfileService = require("../services/doctor.profile.service")

//Add Doctor profile
//localhost:4000/doctor/addProfile
router.post('/addProfile', doctorProfileController.AddDoctorProile);

//Get All Doctor profile
//localhost:4000/doctor/displaydoctors
router.get('/displaydoctors', doctorProfileService.findAllDoctorProfile);

//Get One Doctor profile
//localhost:4000/doctor/doctorprofile/:id
router.get('/doctorprofile/:id', doctorProfileService.findOneDoctorProfile);

//Update one Doctor profile
//localhost:4000/doctor/doctorprofile/:id
router.put('/doctorprofile/:id', doctorProfileService.UpdateOneDoctorProfile);

//Delete one Doctor profile
//localhost:4000/doctor/doctorprofile/:id
router.delete('/doctorprofile/:id', doctorProfileService.DeleteOneDoctorProfile);

//Get Doctor Category
router.get('/displaydoctorscategory/:id', doctorProfileService.findDoctorCategory);

module.exports = router;
