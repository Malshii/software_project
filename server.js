const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const assert = require('assert');

global.__basedir = __dirname;

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

const userRouter = require("./routes/user.route.js");
const staffRouter = require("./routes/user.route.js");
const doctorProfileRouter = require("./routes/doctor.profile.route.js");
const fileRouter = require("./routes/medicalreport.route.js");

app.use("/user",userRouter);
app.use("/doctor",staffRouter);
app.use("/admin",staffRouter);
app.use("/receptionist",staffRouter);
app.use("/labAssistant",staffRouter);
app.use("/profile",doctorProfileRouter);
app.use("/uploadfile",fileRouter);
app.use("/email",fileRouter);

//listen to PORT
app.listen(4000, () =>
  console.log('Example app listening on port no: 4000!'),
);