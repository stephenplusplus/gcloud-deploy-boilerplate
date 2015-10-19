'use strict'

var express = require('express');

var app = express();

app.get('/', function (req, res) {
  console.log('GET /', req.headers['user-agent']);

  res.contentType('text/html');
  res.end('hello from the ⛅');
});

app.listen(process.env.GCLOUD_VM ? 80 : 8080);
