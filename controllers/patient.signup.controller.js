const express = require('express');
const router = express.Router();

const UserController = require('../services/patient.signup.service')

//http://localhost:4000/patient/add
router.post('/add', UserController.signupPatient)
//http://localhost:4000/patient/getPatient
router.get('/',UserController.getAllPatients)
//http://localhost:4000/patient/get/:email
router.get('/get/:email',UserController.getPatient)
//http://localhost:4000/patient/update/:email
router.put('/update/:email',UserController.updatePatient)
//http://localhost:4000/patient/delete/:email
router.delete('/delete/:email',UserController.deletePatient)


module.exports = router;






 
