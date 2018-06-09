import React from 'react';
import PropTypes from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';

const ArticleThread = ({ articleId, articleTitle, shortName }) => {
  return (
    <ReactDisqusComments
      shortname={shortName}
      identifier={articleId}
      title={articleTitle}
    />
  );
}

ArticleThread.propTypes = {
  articleId: PropTypes.string.isRequired,
  articleTitle: PropTypes.string.isRequired,
  shortName: PropTypes.string.isRequired
}

export default ArticleThread;