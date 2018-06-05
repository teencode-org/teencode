import React from 'react';
import PropTypes from 'prop-types';
import { sanitizeHtml } from '../../../utils/helpers';

const ArticleBody = ({article}) => (
  <div className="article-body">
    <div dangerouslySetInnerHTML={{__html: sanitizeHtml(article.story)}} />
  </div>
)

ArticleBody.propTypes = {
  article: PropTypes.object.isRequired
}
export default ArticleBody;