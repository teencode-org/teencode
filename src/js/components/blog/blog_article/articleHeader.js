import React, { PropTypes } from 'react';

const ArticleHeader = ({article}) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h2 className="article-title hidden-sm-down">{article.title}</h2>
        {article.author && <div className="blog-article-author">
          <img src={article.author.profile_image_url || 'http://via.placeholder.com/300x300?text=author'} />
          <p className="article-author">{article.author.name || ''}</p>
          {article.author.tagline && <p className="article-tagline">{article.author.tagline}</p>}
        </div>}
      </div>
    </div>
  </div>
)

ArticleHeader.PropTypes = {
  article: PropTypes.object.isRequired
}

export default ArticleHeader;