const {genSaltSync, hashSync, compareSync} = require("bcrypt");
const {sign} = require("jsonwebtoken");
const Staff_Doctor = require("../models/staff.model").StaffDoctor;
const Staff_Admin = require("../models/staff.model").StaffAdmin;
const Staff_Receptionist = require("../models/staff.model").StaffReceptionist;
const Staff_LabAssisatnt = require("../models/staff.model").StaffLabAssisatnt;
const moment = require("moment");

module.exports = {    
    signupDoctor: async (data) => {
        const salt = genSaltSync(10);  //hashing password to save the user
        const dob = moment(data.dob);
        const updatedDob = dob.set("hour", 3);
        data.dob = updatedDob;
        data.password = hashSync(data.password, salt);
        const user1 = new Staff_Doctor(data);
        const isExist = await Staff_Doctor.findOne({email: data.email});
        if (isExist) {
            throw new Error("This doctor is already exist");
        }
        const result1 = await user1.save();
        return result1;
    },
    signupAdmin: async (data) => {
        const salt = genSaltSync(10);  //hashing password to save the user
        const dob = moment(data.dob);
        const updatedDob = dob.set("hour", 3);
        data.dob = updatedDob;
        data.password = hashSync(data.password, salt);
        const user2 = new Staff_Admin(data);
        const isExist = await Staff_Admin.findOne({email: data.email});
        if (isExist) {
            throw new Error("This administrator is already exist");
        }
        const result2 = await user2.save();
        return result2;
    },
    signupRec: async (data) => {
        const salt = genSaltSync(10);  //hashing password to save the user
        const dob = moment(data.dob);
        const updatedDob = dob.set("hour", 3);
        data.dob = updatedDob;
        data.password = hashSync(data.password, salt);
        const user3 = new Staff_Receptionist(data);
        const isExist = await Staff_Receptionist.findOne({email: data.email});
        if (isExist) {
            throw new Error("This receptionist is already exist");
        }
        const result3 = await user3.save();
        return result3;
    },
    signupLab: async (data) => {
        const salt = genSaltSync(10);  //hashing password to save the user
        const dob = moment(data.dob);
        const updatedDob = dob.set("hour", 3);
        data.dob = updatedDob;
        data.password = hashSync(data.password, salt);
        const user4 = new Staff_LabAssisatnt(data);
        const isExist = await Staff_LabAssisatnt.findOne({email: data.email});
        if (isExist) {
            throw new Error("This lab assistant is already exist");
        }
        const result4 = await user4.save();
        return result4;
    },

    loginDoc: async (data) => {
        const user1 = await Staff_Doctor.findOne({email: data.email});
        if (user1) {
            const result = compareSync(
                data.password,
                user1.password
            );
            if (result) {
                const jsontoken = sign({result: user1}, "secret", {
                    expiresIn: "1day",
                });
                const {email, password} = user1
                const loggedUser1 = {
                    token: jsontoken,
                    user1: {email, password}
                };
                return loggedUser1;

            } else {
                throw new Error("Invalid password");
            }
        } else {
            throw new Error("Invalid email");
        }

    },
    loginAdmin: async (data) => {
        const user2 = await Staff_Admin.findOne({email: data.email});
        if (user2) {
            const result = compareSync(
                data.password,
                user2.password
            );
            if (result) {
                const jsontoken = sign({result: user2}, "secret", {
                    expiresIn: "1day",
                });
                const {email, password} = user2
                const loggedUser2 = {
                    token: jsontoken,
                    user2: {email, password}
                };
                return loggedUser2;

            } else {
                throw new Error("Invalid password");
            }
        } else {
            throw new Error("Invalid email");
        }

    },
    loginRec: async (data) => {
        const user3 = await Staff_Receptionist.findOne({email: data.email});
        if (user3) {
            const result = compareSync(
                data.password,
                user3.password
            );
            if (result) {
                const jsontoken = sign({result: user3}, "secret", {
                    expiresIn: "1day",
                });
                const {email, password} = user3
                const loggedUser3 = {
                    token: jsontoken,
                    user3: {email, password}
                };
                return loggedUser3;

            } else {
                throw new Error("Invalid password");
            }
        } else {
            throw new Error("Invalid email");
        }

    },
    loginLab: async (data) => {
        const user4 = await Staff_LabAssisatnt.findOne({email: data.email});
        if (user4) {
            const result = compareSync(
                data.password,
                user4.password
            );
            if (result) {
                const jsontoken = sign({result: user4}, "secret", {
                    expiresIn: "1day",
                });
                const {email, password} = user4
                const loggedUser4 = {
                    token: jsontoken,
                    user4: {email, password}
                };
                return loggedUser4;

            } else {
                throw new Error("Invalid password");
            }
        } else {
            throw new Error("Invalid email");
        }

    },    
}
    

