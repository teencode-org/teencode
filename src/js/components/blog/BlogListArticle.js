import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { parseBlogTitle } from '../../utils/parseBlogTitle';

const BlogListArticle = ({ id, imageUrl, title, author, summary }) => {
  return (
    <Link to={`/blog/${id}/${parseBlogTitle(title)}`}>
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
    </Link>
  );
}

BlogListArticle.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  summary: PropTypes.string
}

export default BlogListArticle;