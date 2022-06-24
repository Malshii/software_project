const express = require("express");
const router = express.Router();
const onlineAppointmentController = require("../controllers/profit.controller");

//Get All Online patient profile 
//localhost:4000/onlinePatient/displayCharges
router.get('/displayCharges', onlineAppointmentController.findAllCharges);

module.exports = router;