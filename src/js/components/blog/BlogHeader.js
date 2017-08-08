import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { parseBlogTitle } from '../../utils/parseBlogTitle';

const BlogHeader = ({featured}) => {
  let firstImage = featured[0].featured_image_url || 'http://via.placeholder.com/700x500'
  let altImage = 'http://via.placeholder.com/700x250'
  return (
    <div className="row blog-header">
      <div className="col-sm-12 col-lg-7 col-md-12 left-col"
        style={{ backgroundImage: `url("${firstImage}")`}}>
        <Link key={featured[0].id} to={`/blog/${featured[0].id}/${parseBlogTitle(featured[0].title)}`} >
          <div className="description">
            <h1>{featured[0].title}</h1>
            <p>By {featured[0].author.name}</p>
          </div>
        </Link>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-5 right-col">
        {
          featured && featured.slice(1, 3).map(post =>
            <Link key={post.id} to={`/blog/${post.id}/${parseBlogTitle(featured[1].title)}`} >
              <div className="row top-row"
                   style={{ backgroundImage: `url("${post.featured_image_url || altImage}")`}}>
                <div className="description">
                  <h3>{post.title}</h3>
                </div>
              </div>
            </Link>
          )
        }
      </div>
    </div>
  );
}

BlogHeader.propTypes = {
  featured: PropTypes.array
}

export default BlogHeader;