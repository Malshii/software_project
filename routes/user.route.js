const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

//Users signup
//localhost:4000/user/signup
router.post('/signup',userController.RegisterUser);
//router.post('/signupStaff',userController.RegisterStaff);

//User login
//localhost:4000/user/login
router.post('/login', userController.userLogin);

//Update user details
router.put('/forgot-password',userController.forgotPassword);

module.exports = router;
