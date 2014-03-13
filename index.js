var mailer = require('./mailer');
var texter = require('./texter');

module.exports = {
  email: mailer.email,
  text: texter.text
}
