import React from 'react';
import { trimText } from '../../utils/helpers';
import MetaTag from '../meta-tag/';

const SocialLinks = (props) => {
  const url = props.url;
  const title = props.title;
  const handle = '@TeencodeA';
  const tweetLength = 140 - (25 + handle.length);

  return (
    <div className="blog-socials" style={props.style}>
      {/* <MetaTag {...props} /> */}
      <a
        target="_blank"
        className="share-link"
        href={`https://www.facebook.com/dialog/share?app_id=${process.env.FB_APPID}&display=popup&href=${url}/&redirect_uri=${url}`}
      >
        <i className="fa fa-facebook-square fa-2x" />
      </a>
      <a
        target="_blank"
        className="share-link"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(trimText(title, tweetLength))} ${handle}&url=${url}`}
      >
        <i className="fa fa-twitter-square fa-2x" />
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&&source=Teencode`}
        target="_blank"
      >
        <i className="fa fa-linkedin-square fa-2x" />
      </a>
    </div>
  );
}

SocialLinks.propTypes = {
  style: React.PropTypes.object,
  title: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  imageUrl: React.PropTypes.string.isRequired
};

export default SocialLinks;