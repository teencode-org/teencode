import env from '../../src/js/config/environment';
import appConfig from '../../src/js/config';
import request from 'request';

const buildTags = (data, url) => {
  let description = data.blog.story
    .replace(/[<&]\/?[a-zA-Z]+[0-9]?[>;]/g, ' ').substring(0, appConfig.SUMMARY_LENGTH);
  description = description.replace(/<(?:.|\n)*?>/gm, '');
  description = description.replace(/['"]+/g, '');

  return `
      <meta id="og-title" property="og:title" content='${data.blog.title}' />
      <meta id="meta-description" property="og:description" content='${description}' />
      <meta id="og-url" property="og:url" content="${url}" />
      <meta id="og-image" property="og:image" content="${data.blog.featured_image_url}" />
      <meta id="og-type" property="og:type" content="article" />
      
      <meta name="description" content="${description}"/>

      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:site" content="@teencodeA">
      <meta name="twitter:domain" content="Teencode Africa Offical Site">
      <meta name="twitter:title" content="${data.blog.title}">
      <meta name="twitter:description" content="${description}">
      <meta name="twitter:image" content="${data.blog.featured_image_url}">
    `;
}

const injectMetaTag = (file, tags) => {
  const headTag = '<head>';
  const endOfOpeningHeadTag = file.indexOf(headTag) + headTag.length;
  const opening = file.substring(0, endOfOpeningHeadTag);
  const closing = file.substring(endOfOpeningHeadTag);
  return opening + tags + closing;
}

const fetchBlog = (id, cb) => {
  const url = `${env.host}/blogs/${id}`;
  request({ url }, (err, response, body) => {
    if (err !== null) {
      console.log('error \n', err); // eslint-disable-line
      return cb(err);
    }
    cb(null, body);
  });
}

export {
  buildTags,
  injectMetaTag,
  fetchBlog
};
