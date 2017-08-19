import React, { PropTypes } from 'react';

const ArticleBody = ({article}) => (
  <div className="article-body">
    <div dangerouslySetInnerHTML={{__html: article.story}} />
  </div>
)

ArticleBody.propTypes = {
  article: PropTypes.object.isRequired
}
export default ArticleBody;