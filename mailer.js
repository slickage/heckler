var nodemailer = require('nodemailer');
var ses = require('nodemailer-ses-transport');
var config = require('./config');
var transport = nodemailer.createTransport(ses({
  accessKeyId: config.smtp.user,
  secretAccessKey: config.smtp.pass
}));

module.exports = {
  email: function(email, cb) {
    transport.sendMail(email, cb);
  }
}

