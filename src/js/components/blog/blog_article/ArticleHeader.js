import React, { PropTypes } from 'react';

const defaultTagline = "Building Africa's future, through code.";

const ArticleHeader = ({article}) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h2 className="article-title hidden-sm-down">{article.title}</h2>
        {article.author && <div className="blog-article-author">
          <img src={article.author.profile_image_url || 'https://wrbunderwriting.com/wp-content/themes/wrb/dist/img/person-placeholder.jpg'} />
          <p className="article-author">{article.author.name || ''}</p>
          <p className="article-tagline">{article.author.tagline || defaultTagline}</p>
        </div>}
      </div>
    </div>
  </div>
)

ArticleHeader.propTypes = {
  article: PropTypes.object.isRequired
}

export default ArticleHeader;