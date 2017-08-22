"use strict"

let express = require('express');
let favicon = require('serve-favicon');
let path = require('path');
let compression = require('compression');
let request = require('request');
let blogRoute = require('./routes/blogRoute')

/* eslint-disable no-console */

let isDeveloping = process.env.NODE_ENV !== 'production';
let port = isDeveloping ? 9000 : process.env.PORT;
let app = express();

app.use(compression());
app.use(express.static('dist'));
app.use(favicon(path.join(__dirname, '..', 'src', 'img', 'favicon.png')));

app.get('/blog/:id/:title', blogRoute);

app.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server running on port: ${port}`);
  }
});
