const nodeMailer = require("nodemailer");

let transporter = nodeMailer.createTransport({
  port: 587,
  service: "gmail",
  // true for 465, false for other ports
  auth: {
    user: "vishnuna26@gmail.com", // generated gmail user
    pass: process.env.password, // generated gmail password ucqgmgynzlirehxj
  },
  secure: true,
});

module.exports = transporter;
