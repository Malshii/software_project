const onlinePatientProfile = require("../models/onlinePatient.profile.model");

module.exports = {    
    // Retrieve and return all Online appointments' charges from the database.
    findAllCharges : async (req, res) => {
        onlinePatientProfile.findOne({}, {_id: new mongo.ObjectID(request.params.id)})
          .then(oPatient => {
              res.send(oPatient);
          }).catch(err => {
              res.status(500).send({
                  message: err.message || 
                    "Some error occurred while retrieving Online appointments' charges."
              });
        });
    }, 
}

// app.get('update/:id', function(request, response) {
//     people.findOne({ _id: new mongo.ObjectID(request.params.id) }, function(err, doc) {
//       if(err) throw err;
//       response.render("update.jade", { person: doc});
//     });
//   });


// //Calculate doctor's income
// //Calculate daily per doctor salary
// doctorSalary = numberOfAppointment * perDoctorRate 
// doctorSalary = 5 * 1000 

// //Calculate monthly doctor salary per doctor
// totalDoctorSalary = doctorSalary * numberOfAppointmentPerMonth
// totalDoctorSalary = 5000 * 20


// //Calculate clinic's income
// //Income per month
// totalIncome = totalNumberOfAppointmentPerMonth *  channelingFee
// totalIncome =  500 * 2000


// //Calculate total profit
// totalProfit = totalIncome - totalDoctorSalary 
// totalProfit = 1000000 - 10000

// income = channelingFee - chargerPerDoctor

// // income chart 
// // 2022 -> all charges of the clinic


// // profit chart
// // 2022 -> channeling fee - charge per patient


// // appointment table
// // 2022 -> doctor name, 
// //         total of the charge per patient, 
// //         all appointment for each doctor


// // number of appointment chart
// // 2022 -> total appointment for each month
