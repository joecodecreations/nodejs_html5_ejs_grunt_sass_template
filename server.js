var express = require('express');
var bodyParser = require('body-parser');
var urlStatus = require('url-status');
var nodemailer = require('nodemailer');
var fs = require('fs');
var http = require('http');
var https = require('https');

var app = express();
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(express.static(__dirname + '/public_html'));
app.set('view engine', 'ejs');


//Redirect Everything to http without www
// app.get('*', function(req, res, next) {
//
//   weather.get(function(callback){
//     temp = callback;
//   })
//
//   if (req.headers.host.match(/^www/) !== null ) {
//     res.redirect('https://' + req.headers.host.replace(/^www\./, '') + req.url);
//   } else {
//     next();
//   }
// })



app.post('/', function (req, res){
  res.render('./pages/index',{
    title: "Hello World3",
    body: "Hello World"
  });
})

app.get('/', function (req, res){
  res.render('./pages/index',{
    title: "Hello World",
    body: "Hello World"
  });
})

module.exports = app;

app.listen(3000);
