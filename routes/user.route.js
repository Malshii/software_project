const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const staffController = require("../controllers/staff.controller");

//Users signup
//localhost:4000/user/signup
router.post('/signup',userController.RegisterUser);
//router.post('/signupStaff',userController.RegisterStaff);

//localhost:4000/user/addProfile
router.post('/addProfile',userController.AddDoctorProile);

//User login
//localhost:4000/user/login
router.post('/login', userController.userLogin);

//Update user details
router.put('/forgot-password',userController.forgotPassword);

// //Staff members signup
// //localhost:4000/doctor/doctorSignup
// router.post('/doctorSignup', staffController.RegisterDoctor);
// //localhost:4000/admin/adminSignup
// router.post('/adminSignup', staffController.RegisterAdmin);
// //localhost:4000/receptionist/recSignup
// router.post('/recSignup', staffController.RegisterRec);
// //localhost:4000/labAssistant/labSignup
// router.post('/labSignup', staffController.RegisterLab);

// //Staff member login
// //localhost:4000/doctor/doctorlogin
// router.post('/doctorlogin', staffController.loginDoctor);
// //localhost:4000/admin/adminlogin
// router.post('/adminlogin', staffController.loginAdministrator);
// //localhost:4000/receptionist/reclogin
// router.post('/reclogin', staffController.loginReceptionist);
// //localhost:4000/labAssistant/lablogin
// router.post('/lablogin', staffController.loginLabAssistant);

module.exports = router;
