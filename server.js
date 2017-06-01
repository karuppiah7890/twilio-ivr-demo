const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const helper = require('./helper');

const PORT = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.post('/ivr/welcome', (req, res) => {
  //console.log(req.body);
  res.send(helper.welcome());
})

app.post('/ivr/register', (req, res) => {
  const digit = req.body.Digits;
  const fromNumber = req.body.From;
  //console.log("register",req.body);
  //console.log(digit);
  res.send(helper.register(digit, fromNumber));
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
})
