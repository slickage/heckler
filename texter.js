var twilio = require('twilio');
var config = require('./config');

module.exports = {
  text: function(toNumber, body, cb) {
    client = new twilio.RestClient(config.twilio.accountSid, config.twilio.authToken);
    client.sms.messages.create({
      to: toNumber,
      from: '+18086703294',
      body: body
    }, cb);
  }
};

// client.sms.messages.create({
//     to:'+18082565013',
//     from:'+18086703294',
//     body:'Heckler, ready for duty! Why don\'t we take a break and go to Coffee Bean?'
// },
// function(error, message) {
//     // The HTTP request to Twilio will run asynchronously. This callback
//     // function will be called when a response is received from Twilio
//     // The "error" variable will contain error information, if any.
//     // If the request was successful, this value will be "falsy"
//     if (!error) {
//         // The second argument to the callback will contain the information
//         // sent back by Twilio for the request. In this case, it is the
//         // information about the text messsage you just sent:
//         console.log('Success! The SID for this SMS message is:');
//         console.log(message.sid);
//         console.log('Message sent on:');
//         console.log(message.dateCreated);
//     } else {
//         console.log('Oops! There was an error.');
//         console.log(error);
//     }
// });
