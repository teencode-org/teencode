import PropTypes from 'prop-types';
import React from 'react';


const defaultTagline = "Building Africa's future, through code.";

const ArticleHeader = ({article}) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h2 className="article-title hidden-sm-down">{article.title}</h2>
        {article.author && <div className="blog-article-author">
          <img src={article.author.profile_image_url || 'https://farm5.staticflickr.com/4352/36399928213_4820466c94_m.jpg'} />
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