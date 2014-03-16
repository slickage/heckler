var nodemailer = require('nodemailer');
var config = require('./config');
var smtpTransport = nodemailer.createTransport('SMTP',{
  host: config.smtp.host,
  secureConnection: true, // use SSL
  port: config.smtp.port,
  auth: {
    user: config.smtp.user,
    pass: config.smtp.pass
  }
});

module.exports = {
  email: function(email, cb) {
    smtpTransport.sendMail(email, cb);
  }
}

