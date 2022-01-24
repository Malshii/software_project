const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
//const Joi = require('joi');
//Joi.objectId = require('joi-objectid')(Joi);

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

const patientRouter = require("./routes/signuproute");

app.use("/patient",patientRouter);


//listen to PORT
app.listen(4000, () =>
  console.log('Server is running up on port 4000!'),
);


