const express = require('express'),
  bodyParser = require('body-parser'),
  urlStatus = require('url-status'),
  nodemailer = require('nodemailer'),
  fs = require('fs'),
  http = require('http'),
  https = require('https')
portnumber = 3000;

let app = express();
app.use(bodyParser.urlencoded({
  'extended': 'true'
}));
app.use(express.static(__dirname + '/public_html'));
app.set('view engine', 'ejs');

app.post('/', (req, res) => {
  res.render('./pages/index', {
    title: "Hello World3",
    body: "Hello World"
  });
})

app.get('/', (req, res) => {
  res.render('./pages/index', {
    title: "Hello World",
    body: "Hello World"
  });
})

module.exports = app;

app.listen(portnumber);
console.log("Express Server Running on Port: " + portnumber);
