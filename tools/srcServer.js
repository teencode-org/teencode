import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from './webpack_config/dev';
import favicon from 'serve-favicon';
import open from 'open';
import bodyParser from 'body-parser';
import blogRoute from './routes/blogRoute'

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

app.get('/blog/:id/:title', blogRoute);

app.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
    console.log(`Server running on port: ${port}`)
  }
});

export default app;