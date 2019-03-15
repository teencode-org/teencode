const express = require('express');
const webpack = require('webpack');
const path = require('path');
const config = require('./webpack_config/dev');
const favicon = require('serve-favicon');
const open = require('open');
const bodyParser = require('body-parser');
// const blogRoute = require('./routes/blogRoute');

/* eslint-disable no-console */

const port = 8080;
const app = express();
const compiler = webpack(config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(favicon(path.join(__dirname, '..', 'src', 'img', 'favicon.png')));
app.use(require('webpack-hot-middleware')(compiler));

// app.get('/blog/:id/:title', blogRoute);

app.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
    console.log(`Server running on port: ${port}`)
  }
});

module.exports = app
