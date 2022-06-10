const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const staffController = require("../controllers/staff.controller");
const getUser = require("../models/users");
const getResetRequest = require("../models/resetRequests");


//User signup
//localhost:4000/user/signup
router.post('/signup', userController.RegisterUser);

//User login
//localhost:4000/user/login
router.post('/login', userController.userLogin);

//Staff members signup
//localhost:4000/doctor/doctorSignup
router.post('/doctorSignup', staffController.RegisterDoctor);
//localhost:4000/admin/adminSignup
router.post('/adminSignup', staffController.RegisterAdmin);
//localhost:4000/receptionist/recSignup
router.post('/recSignup', staffController.RegisterRec);
//localhost:4000/labAssistant/labSignup
router.post('/labSignup', staffController.RegisterLab);

//Staff member login
//localhost:4000/doctor/doctorlogin
router.post('/doctorlogin', staffController.loginDoctor);
//localhost:4000/admin/adminlogin
router.post('/adminlogin', staffController.loginAdministrator);
//localhost:4000/receptionist/reclogin
router.post('/reclogin', staffController.loginReceptionist);
//localhost:4000/labAssistant/lablogin
router.post('/lablogin', staffController.loginLabAssistant);

//localhost:4000/forgotPassword/forgot
router.post("/forgot", (req, res) => {
    const thisUser = getUser(req.body.email);
    if (thisUser) {        
        const request = {
            id,
            email: thisUser.email,
        };
        createResetRequest(request);
        sendResetLink(thisUser.email, id);
    }
    res.status(200).json();
});

//localhost:4000/resetPassword/reset
router.patch("/reset", (req, res) => {
    const thisRequest = getResetRequest(req.body.id);
    if (thisRequest) {
        const user = getUser(thisRequest.email);
        bcrypt.hash(req.body.password, 10).then(hashed => {
            user.password = hashed;
            updateUser(user);
            res.status(204).json();
        })
    } else {
        res.status(404).json();
    }
});

module.exports = router;
