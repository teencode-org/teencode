import React from 'react';
import { trimText } from '../../utils/helpers';

const SocialLinks = (props) => {
  const url = window.location.href;
  const handle = '@TeencodeA';
  const tweetLength = 140 - (25 + handle.length)
  return (
    <div className="blog-socials" style={props.style}>
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
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(trimText(props.title, tweetLength))} ${handle}&url=${url}`}
      >
        <i className="fa fa-twitter-square fa-2x" />
      </a>
      <a href="#" target="_blank">
        <i className="fa fa-linkedin-square fa-2x" />
      </a>
    </div>
  );
}

SocialLinks.propTypes = {
  style: React.PropTypes.object,
  title: React.PropTypes.string.isRequired
};

export default SocialLinks;