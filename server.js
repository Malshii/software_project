const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

//create connection with mongodb 
const connect = mongoose.connect;
connect(URL);

//open connection
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection success!")
});

const patientRouter = require("./routes/patient.signup.route.js");
const physicalPatientRouter = require("./routes/physicalPatient.profile.route.js");
const onlinePatientRouter = require("./routes/onlinePatient.profile.route.js");
const chechupDetailsRouter = require("./routes/checkupDetails.route.js");

app.use("/patient",patientRouter);
app.use("/physicalPatient",physicalPatientRouter);
app.use("/onlinePatient",onlinePatientRouter);
app.use("/checkupDetails",chechupDetailsRouter);

//listen to PORT
app.listen(4000, () =>
  console.log('Example app listening on port no: 4000!'),
);


const doctortRouter = require("./controllers/doctorRegistrationController.js");

app.use("/doctor",doctortRouter);