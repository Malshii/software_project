const onlinePatientProfile = require("../models/onlinePatient.profile.model");

module.exports = {
    onlinePatientAdd: async (data) => {
        const oPatient = new onlinePatientProfile(data);
        const isExist = await onlinePatientProfile.findOne({email: data.email});
        if (isExist) {
            throw new Error("online profile is already exist");
        }
        const result = await oPatient.save();
        return result;
    },

     // Retrieve and return all Online Patient' profiles from the database.
     findAllOnlinePatientProfile : async (req, res) => {
        onlinePatientProfile.find()
          .then(oPatient => {
              res.send(oPatient);
          }).catch(err => {
              res.status(500).send({
                  message: err.message ||
                    "Some error occurred while retrieving Online Patient' profiles."
              });
        });
    },

    // Find a single Online Patient with a id
    findOneOnlinePatientProfile : async (req, res) => {
        onlinePatientProfile.findOne(req.params.email)
            .then(oPatient => {
                if (!oPatient) {
                    return res.status(404).send({
                        message: "Online Patient's profile not found with email " + req.params.email
                    });
                }
                res.send(oPatient);
            }).catch(err => {
                if (err) {
                    return res.status(404).send({
                        message: "Online Patient's profile not found with email " + req.params.email
                    });
                }
                return res.status(500).send({
                    message: "Error retrieving Online Patient's profile with email " + req.params.email
                });
        });
    },

    // Update a Online Patient identified by the id in the request
    UpdateOneOnlinePatientProfile : (req, res) => {
        onlinePatientProfil.findOneAndUpdate(req.params.email, req.body, { new: true })
            .then((oPatient) => {
                if (!oPatient) {
                    return res.status(404).send({
                        message: "no Online Patient found",
                    });
                }
                res.status(200).send(oPatient);
            })
            .catch((err) => {
                return res.status(404).send({
                    message: "error while updating the profile",
            });
        });
    },

    // Delete a Online Patient with the specified id in the request
    DeleteOneOnlinePatientProfile : (req, res) => {
        onlinePatientProfile.findOneAndDelete(req.params.email)
            .then(oPatient => {
                if(!oPatient) {
                return res.status(404).send({
                message: "Online Patient profile not found with email " + req.params.email
                });
                }
                res.send({ message: "Online Patient profile deleted successfully!" });
            }).catch(err => {
                if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                    return res.status(404).send({
                        message: "Online Patient profile not found with email " + req.params.email
                    });
                }
                return res.status(500).send({
                    message: "Could not delete Online Patient with email " + req.params.email
                });
            });
    },


 }


