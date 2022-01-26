const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const cors = require ("cors");
const dotenv = require ("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT ;

app.use(cors());
app.use(bodyParser.json());

const URL =process.env.MONGODB_URL || 8070;
//const URL =4000;
//create connection with mongodb 
const connect = mongoose.connect;
connect(URL);

/*mongoose.connect(URL,{
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopologyL : true,
    useFindAndModify :false
});*/
const connection = mongoose.connection;
connection.once("open",() => {
    console.log("MongoDB connection success!");
}).on('error',function(error){
  console.log('error is',error);
});

app.listen(PORT, () =>
  console.log('Server is running up on port :  ${PORT}'),
);

const doctorRoutor = require("./routes/doctor");

app.use("/doctor",doctorRoutor);