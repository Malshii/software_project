const express = require('express');
const router = express.Router();
const requestController = require('../controllers/newSchedule.controller');

//Users signup
//localhost:4000/schedule/request
router.post('/request', requestController.RequestNewSchedule);

module.exports = router;