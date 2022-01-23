const express = require('express');
const router = express.Router();

const UserController = require('../controllers/signupcontroller')

//https://localhost:3000/patient/signup
router.post('/', UserController.signupUsers)

module.exports = router;






 
