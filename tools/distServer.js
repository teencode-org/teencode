"use strict"

let express = require('express');
let path = require('path');
let compression = require('compression');
let request = require('request');
let fs = require('fs');
let appConfig = require('../src/js/config');
let env = require('../src/js/config/environment');

/* eslint-disable no-console */

let isDeveloping = process.env.NODE_ENV !== 'production';
let port = isDeveloping ? 9000 : process.env.PORT;
let app = express();

app.use(compression());
app.use(express.static('dist'));



function fetchBlog(id, cb) {
  const url = `${env.host}/blogs/${id}`;
  request({ url }, (err, response, body) => {
    if (err !== null) {
      console.log('error \n', err);
      return cb(err);
    }
    cb(null, body);
  });
}

function buildTags(data, url) {
  const description = data.blog.story
    .replace(/[<&]\/?[a-zA-Z]+[0-9]?[>;]/g, ' ').substring(0, appConfig.SUMMARY_LENGTH);

  return `
  <meta id="og-title" property="og:title" content={${data.blog.title}} />
  <meta id="meta-description" property="og:description" content={${description}} />
  <meta id="og-url" property="og:url" content={${url}} />
  <meta id="og-image" property="og:image" content={${data.blog.featured_image_url}} />
  <meta id="og-type" property="og:type" content="article" />
  `;
}

function injectMetaTag(file, tags) {
  const endOfOpeningHeadTag = file.indexOf('<head>') + 6;
  const opening = file.substring(0, endOfOpeningHeadTag);
  const closing = file.substring(endOfOpeningHeadTag);
  return opening + tags + closing;
}

app.get('/blog/:id/:title', function (req, res) {
  const blogId = req.params.id;
  fetchBlog(blogId, (err, data) => {
    if (err) {
      return res.sendFile(path.join(__dirname, '../src/index.html'));
    }
    const tags = buildTags(JSON.parse(data), req.url);

    const file = fs.readFileSync(path.join(__dirname, '../src/index.html'), 'utf8');
    const newfile = injectMetaTag(file, tags);
    res.send(newfile);
  });
});

app.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});




app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server running on port: ${port}`);
  }
});
