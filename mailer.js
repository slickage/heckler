var nodemailer = require('nodemailer');
var ses = require('nodemailer-ses-transport');
var config = require('./config');
var transport = nodemailer.createTransport(ses({
  accessKeyId: config.ses.id,
  secretAccessKey: config.ses.key,
  region: config.ses.region
}));

module.exports = {
  email: function(email, cb) {
    transport.sendMail(email, cb);
  }
}

