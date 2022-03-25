const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, 
    auth: {
      user: '3c4d8301689eab', 
      pass: 'b0b5e34373fa87', 
    },
  });