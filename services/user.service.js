const {genSaltSync, hashSync, compareSync} = require("bcrypt");
const {sign} = require("jsonwebtoken");
const UserPatient = require("../models/user.model");
const moment = require("moment");

module.exports = {    
    signupUser: async (data) => {
        const salt = genSaltSync(10);  //hashing password to save the user
        const dob = moment(data.dob);
        const updatedDob = dob.set("hour", 3);
        data.dob = updatedDob;
        data.password = hashSync(data.password, salt);
        const user = new UserPatient(data);
        const isExist = await UserPatient.findOne({email: data.email});
        if (isExist) {
            throw new Error("User is already exist");
            return;
        }
        const result = await user.save();
        return result;
    },
    loginUser: async (data) => {
        const user = await UserPatient.findOne({email: data.email});
        if (user) {
            const result = compareSync(
                data.password,
                user.password
            );
            if (result) {
                const jsontoken = sign({result: user}, "secret", {
                    expiresIn: "1day",
                });
                const {email, password} = user
                const loggedUser = {
                    token: jsontoken,
                    user: {email, password}
                };
                return loggedUser;

            } else {
                throw new Error("Invalid password");
            }
        } else {
            throw new Error("Invalid email");
        }

    },
}
    



