import React from 'react';

export default ({imageUrl, title, author, summary}) => {
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