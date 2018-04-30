import express, { static as staticFiles } from "express";
import favicon from "serve-favicon";
import { join } from "path";
import compression from "compression";
import request from "request";
import blogRoute from "./routes/blogRoute";

/* eslint-disable no-console */

let isDeveloping = process.env.NODE_ENV !== 'production';
let port = isDeveloping ? 9000 : process.env.PORT;
let app = express();

app.use(compression());
app.use(staticFiles('dist'));
app.use(favicon(join(__dirname, '..', 'src', 'img', 'favicon.png')));

app.get('/blog/:id/:title', blogRoute);

app.use(function (req, res) {
  res.sendFile(join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server running on port: ${port}`);
  }
});

export default app;