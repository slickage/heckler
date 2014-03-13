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
  email: function(mailOptions, cb) {
    smtpTransport.sendMail(mailOptions, cb);
  }
}


// var mailOptions = {
//     from: "Heckler <jw@example.slickage.nodomain>", // sender address
//     to: "jw@slickage.com", // list of receivers
//     subject: "Hello", // Subject line
//     text: "Testing from heckler", // plaintext body
//     html: "<b>Testing from heckler</b>" // html body
// };

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    // if you don't want to use this transport object anymore, uncomment following line
    smtpTransport.close(); // shut down the connection pool, no more messages
});


