const {genSaltSync, hashSync, compareSync} = require("bcrypt");
const {sign} = require("jsonwebtoken");
const UserPatient = require("../models/user.model");
const moment = require("moment");
const JWT = require("jsonwebtoken");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

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

    requestPasswordReset : async (email) => {

        const user = await User.findOne({ email });
      
        if (!user) throw new Error("User does not exist");
        let token = await Token.findOne({ userId: user._id });
        if (token) await token.deleteOne();
        let resetToken = crypto.randomBytes(32).toString("hex");
        const hash = await bcrypt.hash(resetToken, Number(bcryptSalt));
      
        await new Token({
          userId: user._id,
          token: hash,
          createdAt: Date.now(),
        }).save();
      
        const link = `${clientURL}/passwordReset?token=${resetToken}&id=${user._id}`;
        sendEmail(user.email,"Password Reset Request",{name: user.name,link: link,},"./template/requestResetPassword.handlebars");
        return link;
      },
      
      resetPassword : async (userId, token, password) => {
          let passwordResetToken = await Token.findOne({ userId });
          if (!passwordResetToken) {
            throw new Error("Invalid or expired password reset token");
          }
          const isValid = await bcrypt.compare(token, passwordResetToken.token);
          if (!isValid) {
            throw new Error("Invalid or expired password reset token");
          }
          const hash = await bcrypt.hash(password, Number(bcryptSalt));
          await User.updateOne(
            { _id: userId },
            { $set: { password: hash } },
            { new: true }
          );
          const user = await User.findById({ _id: userId });
          sendEmail(
            user.email,
            "Password Reset Successfully",
            {
              name: user.name,
            },
            "./template/resetPassword.handlebars"
          );
          await passwordResetToken.deleteOne();
          return true;
        }

}


    



