const express = require("express");
const router = express.Router();
const controller = require("../controllers/medicalreport.controller");
  
//localhost:4000/uploadfile/upload
router.post("/upload", controller.upload);
//localhost:4000/uploadfile/files
router.get("/files", controller.getListFiles);
//localhost:4000/uploadfile/files/:name
router.get("/files/:name", controller.download);

module.exports = router;