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

app.use("/patient",patientRouter);

//listen to PORT
app.listen(4000, () =>
  console.log('Example app listening on port no: 4000!'),
);