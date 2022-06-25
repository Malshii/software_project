const schedule = require("../models/schedule.model");

module.exports = {    
    scheduleAdd: async (data) => {        
        const sDetails = new schedule(data);
        const isExist = await schedule.findOne({email: data.email});
        if (isExist) {
            throw new Error("Schedule is already exist");
        }
        const result = await sDetails.save();
        return result;
    }, 
    
     // Retrieve and return all Schedule profiles from the database.
     findAllSchedule : async (req, res) => {
        schedule.find()
          .then(sDetails => {
              res.send(sDetails);
          }).catch(err => {
              res.status(500).send({
                  message: err.message || 
                    "Some error occurred while retrieving Schedule."
              });
        });
    }, 

    // Find a single Schedule with a id    
    findOneSchedule : async (req, res) => {
        schedule.findById(req.params.id)
            .then(sDetails => {
                if (!sDetails) {
                    return res.status(404).send({
                        message: "Schedule not found with email " + req.params.id
                    });
                }
                res.send(sDetails);
            }).catch(err => {
                if (err) {
                    return res.status(404).send({
                        message: "Schedule not found with email " + req.params.id
                    });
                }
                return res.status(500).send({
                    message: "Error retrieving Schedule with email " + req.params.id
                });
        });
    },

    // Update a Schedule identified by the id in the request
    UpdateOneSchedule : (req, res) => {
        schedule.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then((sDetails) => {
                if (!sDetails) {
                    return res.status(404).send({
                        message: "no Schedule found",
                    });
                }
                res.status(200).send(sDetails);
            })
            .catch((err) => {
                return res.status(404).send({
                    message: "error while updating the Schedule",
            });
        });
    },

    // Delete a Schedule with the specified id in the request
    DeleteOneSchedule : (req, res) => {
        schedule.findByIdAndRemove(req.params.id)
            .then(sDetails => {
                if(!sDetails) {
                return res.status(404).send({
                message: "Schedule not found with id " + req.params.id
                });
                }
                res.send({ message: "Schedule deleted successfully!" });
            }).catch(err => {
                if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                    return res.status(404).send({ 
                        message: "Schedule not found with id " + req.params.id
                    });
                }
                return res.status(500).send({
                    message: "Could not delete Schedule with id " + req.params.id
                });
            });
    },


 }
 

