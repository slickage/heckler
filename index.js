var mailer = require('./mailer');
var texter = require('./texter');

module.exports = {
  email: mailer.email,
  text: texter.text
}


// email example
// var email = {
//     from: "Heckler <heckler@slickage.com>", // sender address
//     to: "julie@slickage.com", // list of receivers
//     subject: "Hello", // Subject line
//     text: "Testing from heckler", // plaintext body
//     html: "<b>Testing from heckler</b>" // html body
// };
