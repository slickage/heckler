var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var config = require('./config');

var transport = nodemailer.createTransport(smtpTransport({
  host: config.smtp.host,
  port: config.smtp.port,
  secure: true,
  auth: {
    user: config.smtp.user,
    pass: config.smtp.pass
  }
}));

module.exports = {
  email: function(email, cb) {
    transport.sendMail(email, cb);
  }
}
