const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

global.__basedir = __dirname;

require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

//create connection with mongodb
const connect = mongoose.connect;
connect(URL);

//open connection
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Mongodb Connection success!');
});

const userRouter = require('./routes/user.route.js');
const staffRouter = require('./routes/user.route.js');
const doctorProfileRouter = require('./routes/doctor.profile.route.js');
const fileRouter = require('./routes/medicalreport.route.js');
const forgot_Password = require('./routes/forgotPassword');
const reset_Password = require('./routes/resetPassword');
const update_PasswordViaEmail = require('./routes/updatePasswordViaEmail');

app.use('/user', userRouter);
app.use('/doctor', staffRouter);
app.use('/admin', staffRouter);
app.use('/receptionist', staffRouter);
app.use('/labAssistant', staffRouter);
app.use('/profile', doctorProfileRouter);
app.use('/uploadfile', fileRouter);
app.use('/email', fileRouter);
app.use('/forgotpassword',forgot_Password);
app.use('/resetpassword',reset_Password);
app.use('/updatepassword',update_PasswordViaEmail);

//listen to PORT
// app.listen(4000, () =>
//   console.log('Example app listening on port no: 4000!'),
// );

//SendSMS using vonage
const Vonage = require('@vonage/server-sdk');
const { forgotPassword } = require('./controllers/user.controller.js');

const vonage = new Vonage({
  apiKey: 'b9934ed5',
  apiSecret: 'tDNb5S64JpX7Inai',
});

const from = 'Vonage APIs';
const to = '94769396646';
const text =
  'The doctor will not be arriving today. We will refund your channeling charge. Please reschedule your appointment if necessary. Thank you very much! - Chamal Medicare -';

app.post('/sendSMS', (req, res) => {
  // Send SMS
  vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
      console.log(err);
    } else {
      if (responseData.messages[0]['status'] === '0') {
        console.log('Message sent successfully.');
      } else {
        console.log(
          `Message failed with error: ${responseData.messages[0]['error-text']}`
        );
      }
    }
  });
});

// //SendSMS using twilio
// app.get("/sendSMS", function (req, res) {
//   var accountSid = "AC618285a01b5bf82dfab2e39f15c6e7de"; // Your Account SID from www.twilio.com/console
//   var authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console

//   var twilio = require("twilio");
//   var client = new twilio(accountSid, authToken);

//   client.messages
//     .create({
//       body: "Hello from Node",
//       to: "0769396646", // Text this number
//       from: "+14342265201", // From a valid Twilio number
//     })
//     .then((message) => res.send(`The message with id: ${message} was sent!`));
// });

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
