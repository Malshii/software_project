const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');

//Staff signup
router.post('/staff-register', adminController.StaffRegisterUser);

module.exports = router;
