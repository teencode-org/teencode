import React from 'react';
import { trimText } from 'Utils/helpers';

const openURLInPopup = (url, name, width=600, height=400) => {
  window.open(url, name || 'window' + Math.floor(Math.random() * 10000 + 1), `width=${width},height=${height},menubar=0,location=0,toolbar=0,status=0,scrollbars=1`);
  // window.open('https://www.facebook.com/dialog/share? app_id=145634995501895 &display=popup&href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2F&redirect_uri=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fexplorer', 'chd', 'width=600,height=400')
}

const SocialLinks = (props) => {
  const url = props.url;
  const title = props.title;
  const handle = '@TeencodeA';
  const tweetLength = 140 - (25 + handle.length);

  return (
    <div className="blog-socials" style={props.style}>
      <span
        className="share-link"
        onClick={() => openURLInPopup(`https://www.facebook.com/dialog/share?app_id=${process.env.FB_APPID}&display=popup&href=${encodeURIComponent(url)}&redirect_uri=${encodeURIComponent(url)}`)}
      >
        <i className="fa fa-facebook-square fa-2x" />
      </span>
      <span
        className="share-link"
        onClick={() => openURLInPopup(`https://twitter.com/intent/tweet?text=${encodeURIComponent(trimText(title, tweetLength))} ${handle}&url=${url}`)}
      >
        <i className="fa fa-twitter-square fa-2x" />
      </span>
      <span
        className="share-link"
        onClick={() => openURLInPopup(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&&source=Teencode`)}
      >
        <i className="fa fa-linkedin-square fa-2x" />
      </span>
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