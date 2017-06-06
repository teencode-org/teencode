import React, { PropTypes } from 'react';

const BlogListArticle = ({imageUrl, title, author, summary}) => {
  return (
    <div className="row blog-article">
      <div className="blog-article-image">
        <img src={imageUrl} />
      </div>
      <div className="blog-article-info">
        <h2 className="article-title">{title}</h2>
        <p className="article-author">{author}</p>
        <p className="article-summary">
          {summary}
        </p>
        <button className="btn">Read More ></button>
      </div>
    </div>
  );
}

BlogListArticle.propType = {
  imageUrl: PropTypes.string.required,
  title: PropTypes.string.required,
  author: PropTypes.string.required,
  summary: PropTypes.string.required
}

export default BlogListArticle;