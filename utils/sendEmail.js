const nodemailer = require('nodemailer');

const sendEmail = async (email, subject, text) => {
  console.log('user', process.env.EMAIL);
  console.log('user', process.env.PASS);
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: subject,
      text: text,
    });
    console.log('email sent successfully');
    return {
      success: true,
      message: 'Check your email to reset the password!',
    };
  } catch (error) {
    console.log(error, 'email not sent');
    return {
      success: false,
      message: "Couldn't send the link to reset the password. Try again later.",
    };
  }
};

module.exports = sendEmail;
