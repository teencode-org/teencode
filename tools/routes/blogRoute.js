const fs = require('fs');
const path = require('path');
const helpers = require('./helpers')

const ROOT_PATH = path.join(__dirname, '..', '..');

const {
  buildTags,
  injectMetaTag,
  fetchBlog
} = helpers;

module.exports = (req, res) => {
  const blogId = req.params.id;
  fetchBlog(blogId, (err, data) => {
    if (err) {
      return res.sendFile(path.join(ROOT_PATH, 'src/index.html'));
    }

    const url = req.protocol + '://' + req.hostname + req.url;
    const tags = buildTags(JSON.parse(data), url);
    const file = fs.readFileSync(path.join(ROOT_PATH, 'src/index.html'), 'utf8');
    const newfile = injectMetaTag(file, tags);

    res.send(newfile);
  });
};
