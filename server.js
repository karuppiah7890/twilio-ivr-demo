const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const helper = require('./helper');

const PORT = 3000 || process.env.PORT;

app.use(bodyparser.json());

app.post('/ivr/welcome', (req, res) => {
  console.log(req.body.From);
  res.send(helper.welcome());
})

app.post('/ivr/bye', (req, res) => {
  const digit = req.body.Digits;
  console.log(digit);
  res.send(helper.bye(digit));
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
})
