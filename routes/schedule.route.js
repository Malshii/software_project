const express = require("express");
const router = express.Router();
const scheduleController = require("../controllers/schedule.controller");
const scheduleService = require("../services/schedule.service")

//Add 
router.post('/addschedule', scheduleController.Schedule);

//Get All 
router.get('/displayschedule', scheduleService.findAllSchedule);

//Get One 
router.get('/schedule/:id', scheduleService.findOneSchedule);

//Update 
router.put('/schedule/:id', scheduleService.UpdateOneSchedule);

//Delete one 
router.delete('/schedule/:id', scheduleService.DeleteOneSchedule);



module.exports = router;
 