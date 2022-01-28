const express = require('express');
const router = express.Router();

const UserController = require('../services/doctorRegistrationService')

//http://localhost:4000/doctor/add
router.post('/add', UserController.doctorRegistration)
//http://localhost:4000/doctor/getPatient
router.get('/',UserController.getAlldoctors)
//http://localhost:4000/doctor/get/:email
router.get('/get/:email',UserController.getdoctor)
//http://localhost:4000/doctor/update/:email
router.put('/update/:email',UserController.updatedoctor)
//http://localhost:4000/doctor/delete/:email
router.delete('/delete/:email',UserController.delete_doctor)


module.exports = router;






 
