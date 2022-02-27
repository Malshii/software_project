const express = require("express");
const router = express.Router();
const doctorProfileController = require("../controllers/doctor.profile.controller");

//Add Doctor profile 
//localhost:4000/profile/addProfile
router.post('/addProfile', doctorProfileController.AddDoctorProile);

module.exports = router;