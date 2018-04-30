import { readFile, writeFile } from "fs";
import { load } from "cheerio";
import colors from "colors";

readFile('src/index.html', 'utf-8', function (err, markup) {
  if (err) {
    return err;
  }
  const $ = load(markup);

  writeFile('dist/index.html', $.html(), 'utf-8', function(err) {
    if (err) {
      return err;
    }
    'index.html written to /dist'.green
  })
})
