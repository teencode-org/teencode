const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");
const compression = require("compression");
const blogRoute = require("./routes/blogRoute");

/* eslint-disable no-console */

let isDeveloping = process.env.NODE_ENV !== 'production';
let port = isDeveloping ? 9000 : process.env.PORT;
let staticFiles = express.static;
let app = express();

app.use(compression());
app.use(staticFiles('dist'));
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

module.exports = app;
