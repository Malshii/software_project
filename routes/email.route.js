const express = require("express");
const router = express.Router();
const controller = require("../controllers/email.controller");

//localhost:4000/email/sendEmails
router.post("/sendEmails", controller.SendEmails);

module.exports = router;