const VoiceResponse = require('twilio').twiml.VoiceResponse;

module.exports = {
  welcome: function() {
    const twiml = new VoiceResponse();
    const music = 'https://narrow-watch-3844.twil.io/assets/Cool-sms-tone.mp3';

    const gather = twiml.gather({
      action: '/ivr/bye',
      numDigits: '1',
      method: 'POST'
    });

    gather.play({loop: 1},music);

    return twiml.toString();
  },
  bye: function(digit) {
    const twiml = new VoiceResponse();

    twiml.pause({
      length: 5
    })

    twiml.say(`I waited for 5 seconds. Thanks for calling Karuppiah!`);

    twiml.hangup();

    return twiml.toString();
  }
}
