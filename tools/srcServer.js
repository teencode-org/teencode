import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import favicon from 'serve-favicon';
import open from 'open';
import request from 'request';
import bodyParser from 'body-parser';
import env from '../src/js/config/environment';
import appConfig from '../src/js/config';
import fs from 'fs';

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
  let description = data.blog.story
    .replace(/[<&]\/?[a-zA-Z]+[0-9]?[>;]/g, ' ').substring(0, appConfig.SUMMARY_LENGTH);
  description = description.replace(/['"]+/g, '');
  return `
    <meta id="og-title" property="og:title" content='${data.blog.title}' />
    <meta id="meta-description" property="og:description" content='${description}' />
    <meta id="og-url" property="og:url" content=${url} />
    <meta id="og-image" property="og:image" content=${data.blog.featured_image_url} />
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
    const url = req.protocol + '://' + req.hostname + req.url;
    const tags = buildTags(JSON.parse(data), url);

    const file = fs.readFileSync(path.join(__dirname, '../src/index.html'), 'utf8');
    const newfile = injectMetaTag(file, tags);
    res.send(newfile);
  });
});

app.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
    console.log(`Server running on port: ${port}`)
  }
});
