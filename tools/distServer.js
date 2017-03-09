"use strict"

let express = require('express');
let path = require('path');
let compression = require('compression');

/* eslint-disable no-console */

let isDeveloping = process.env.NODE_ENV !== 'production';
let port = isDeveloping ? 9000 : process.env.PORT;
let app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server running on port: ${port}`);
  }
});
