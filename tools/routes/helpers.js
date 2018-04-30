import request from 'request';
import config from '../../src/js/config';

export const buildTags = ({blog}, url) => {
  let description = blog.story
    .replace(/[<&]\/?[a-zA-Z]+[0-9]?[>;]/g, ' ').substring(0, config.SUMMARY_LENGTH);
  description = description.replace(/<(?:.|\n)*?>/gm, '');
  description = description.replace(/['"]+/g, '').trim();
  const image_url = !!blog.featured_image_url ?
                      blog.featured_image_url :
                      config.host + config.defaultFeaturedImage;

  return `
      <meta id="og-title" property="og:title" content='${blog.title}' />
      <meta id="meta-description" property="og:description" content='${description}' />
      <meta id="og-url" property="og:url" content="${url}" />
      <meta id="og-image" property="og:image" content="${image_url}" />
      <meta id="og-type" property="og:type" content="article" />
      
      <meta name="description" content="${description}"/>

      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:site" content="@teencodeA">
      <meta name="twitter:domain" content="Teencode Africa Offical Site">
      <meta name="twitter:title" content="${blog.title}">
      <meta name="twitter:description" content="${description}">
      <meta name="twitter:image" content="${image_url}">
    `;
}

export const injectMetaTag = (file, tags) => {
  const headTag = '</head>';
  const endOfOpeningHeadTag = file.indexOf(headTag);
  const opening = file.substring(0, endOfOpeningHeadTag);
  const closing = file.substring(endOfOpeningHeadTag);
  return opening + tags + closing;
}

export const fetchBlog = (id, cb) => {
  const url = `${config.host}/blogs/${id}`;
  request({ url }, (err, response, body) => {
    if (err !== null) {
      console.log('error \n', err); // eslint-disable-line
      return cb(err);
    }
    cb(null, body);
  });
}
