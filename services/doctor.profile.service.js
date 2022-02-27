const DoctorProfile = require("../models/doctor.profile.model");

module.exports = {    
    profileDoctor: async (data) => {        
        const dProfile = new DoctorProfile(data);
        const isExist = await DoctorProfile.findOne({email: data.email});
        if (isExist) {
            throw new Error("Doctor profile is already exist");
        }
        const result = await dProfile.save();
        return result;
    },    
}


    



