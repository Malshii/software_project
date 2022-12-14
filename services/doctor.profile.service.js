const Doctor = require('../models/doctor.profile.model');

module.exports = {
  profileDoctor: async (data) => {
    const dProfile = new Doctor(data);
    const isExist = await Doctor.findById({ id: data.id });
    if (isExist) {
      throw new Error('Doctor profile is already exist');
    }
    const result = await dProfile.save();
    return result;
  },

  // Retrieve and return all doctors' profiles from the database.
  findAllDoctorProfile: async (req, res) => {
    Doctor.find()
      .then((dProfile) => {
        res.send(dProfile);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while retrieving doctors' profiles.",
        });
      });
  },

  // Find a single doctor with a id
  findOneDoctorProfile: async (req, res) => {
    Doctor.findById(req.params.id)
      .then((dProfile) => {
        if (!dProfile) {
          return res.status(404).send({
            message: "Doctor's profile not found with email " + req.params.id,
          });
        }
        res.send(dProfile);
      })
      .catch((err) => {
        if (err) {
          return res.status(404).send({
            message: "Doctor's profile not found with email " + req.params.id,
          });
        }
        return res.status(500).send({
          message:
            "Error retrieving doctor's profile with email " + req.params.id,
        });
      });
  },

  // Update a doctor identified by the id in the request
  UpdateOneDoctorProfile: (req, res) => {
    Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((dProfile) => {
        if (!dProfile) {
          return res.status(404).send({
            message: 'no doctor found',
          });
        }
        res.status(200).send(dProfile);
      })
      .catch((err) => {
        return res.status(404).send({
          message: 'error while updating the profile',
        });
      });
  },

  // Delete a doctor with the specified id in the request
  DeleteOneDoctorProfile: (req, res) => {
    DoctorProfile.findByIdAndRemove(req.params.id)
      .then((dProfile) => {
        if (!note) {
          return res.status(404).send({
            message: 'Doctor profile not found with id ' + req.params.id,
          });
        }
        res.send({ message: 'Doctor profile deleted successfully!' });
      })
      .catch((err) => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
            message: 'Dotor profile not found with id ' + req.params.id,
          });
        }
        return res.status(500).send({
          message: 'Could not delete Doctor with id ' + req.params.id,
        });
      });
  },

  //find a doctor category
  findDoctorCategory: async (req, res) => {
    DoctorProfile.find({ category: req.params.id })
      .then((dProfile) => {
        res.send(dProfile);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while retrieving doctors' profiles.",
        });
      });
  },

  //Get doctor profile
  getProfile: async (data) => {
    const profile = await Doctor.findOne({ doctor_id: data._id });
    console.log(profile);
    if (profile) {
      return { success: true, profile: profile };
    } else {
      return { success: false, message: 'Something went wrong' };
    }
  },
};
