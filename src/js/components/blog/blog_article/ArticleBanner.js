import React, { PropTypes } from 'react';

const ArticleBanner = ({article, defaultBlogImage}) => (
  <div className="article-image-container">
    <img className="article-image" src={article.featured_image_url || defaultBlogImage} />
    <div className="article-title-sm hidden-md-up">{article.title}</div>
  </div>
);

ArticleBanner.propTypes = {
  article: PropTypes.object.isRequired,
  defaultBlogImage: PropTypes.object.isRequired
}

export default ArticleBanner;
