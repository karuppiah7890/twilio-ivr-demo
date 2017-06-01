const VoiceResponse = require('twilio').twiml.VoiceResponse;

module.exports = {
  welcome: function() {
    const twiml = new VoiceResponse();
    const music = 'https://narrow-watch-3844.twil.io/assets/Cool-sms-tone.mp3';

    const gather = twiml.gather({
      action: '/ivr/register',
      numDigits: '1',
      method: 'POST'
    });

    gather.say(`Thank you for calling ABC corp,
    to speak with us stay on the line or press 1 to be added to our DNC list`,
    {
      voice: 'alice',
      language: 'en-GB'
    });

    twiml.say(`We are connecting you to our customer support.`,
    {
      voice: 'alice',
      language: 'en-GB'
    });

    twiml.dial(process.env.MY_MOBILE_NUMBER);

    return twiml.toString();
  },
  register: function(digit) {

    const twiml = new VoiceResponse();

    twiml.say(`Your number has been added to our DNC list, have a nice day`,
    {
      voice: 'alice',
      language: 'en-GB'
    });

    twiml.hangup();

    return twiml.toString();
  }
}
