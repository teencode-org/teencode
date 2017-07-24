import React from 'react';
import { trimText } from '../../utils/helpers';

const MediaShare = () => {
  // const url = window.location.href;
  const handle = '@TeencodeA';
  const longText = 'Data structures are a critical part of software development, and one of the most common topics for developer job interview questions. The good news is that they’re basically just specialized formats for organizing and storing data. Im going to teach you 10 of the most common data structures — right here in this short article. Ive embedded videos that I created for each of these data structures. I’ve also linked to code examples for each of them, which show how to implement these in JavaScript.';
  const url = 'https://koshin.herokuapp.com/';
  const tweetLength = 140 - (url.length + handle.length + 2)
  return (
    <div className="share-view">
      <a
        target="_blank"
        className="share-link"
        href={`https://www.facebook.com/dialog/share?app_id=${process.env.APPID}&display=popup&href=${url}%2Fredirect_uri=${url}`}
      >
        <i
          className="fa fa-facebook-square"
          data-href={url}
          data-layout="button_count"
          data-size="small"
          data-mobile-iframe="false"
        >
        </i>
      </a>
      <a
        target="_blank"
        className="share-link"
        href={`https://twitter.com/intent/tweet?text=${trimText(longText, tweetLength)} ${handle}&url=${url}`}
      >
        <i
          className="fa fa-twitter-square"
          data-href={url}
          data-layout="button_count"
          data-size="small"
          data-mobile-iframe="false"
        >
        </i>
      </a>
    </div>
  );
}

export default MediaShare;
