const nodeMailer = require("nodemailer");

let transporter = nodeMailer.createTransport({
  service: "hotmail", // service name

  // true for 465, false for other ports
  auth: {
    user: "rapidosh77@outlook.com", // generated gmail user
    pass: process.env.password, // generated gmail password ucqgmgynzlirehxj
  },
});

module.exports = transporter;
