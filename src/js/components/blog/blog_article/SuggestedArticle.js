import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { parseBlogTitle } from '../../../utils/parseBlogTitle';
import defaultBlogImage from '../../../../img/teencode_maryleaks_small.jpeg';

const SuggestedArticle = ({blogPost, index}) => (
  <Link
    key={`suggested-${index}`}
    to={`/blog/${blogPost.id}/${parseBlogTitle(blogPost.title)}`}
  >
    <div className="col-md-6 col-sm-12">
      <div
        className="suggested-reading-link"
        style={{ background: `url(${blogPost.featured_image_url || defaultBlogImage})` }}
      >
        <div className="suggested-reading-overlay hidden-sm-down">
          <h4 className="suggested-reading-name">{blogPost.title}</h4>
        </div>
      </div>
      <div className="suggested-reading-link-sm hidden-md-up">
        <h4 className="suggested-reading-name-sm">{blogPost.title}</h4>
        <p className="suggested-reading-author">by {blogPost.author.name}</p>
      </div>
    </div>
  </Link>
);

SuggestedArticle.propTypes = {
  blogPost: PropTypes.object.isRequired,
  index: PropTypes.number
};

export default SuggestedArticle;
