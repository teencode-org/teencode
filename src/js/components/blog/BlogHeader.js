import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const BlogHeader = ({featured}) => {
  let firstImage = featured[0].featured_image_url || 'http://via.placeholder.com/700x500'
  let secondImage = featured[1].featured_image_url || 'http://via.placeholder.com/700x250'
  let thirdImage = featured[2].featured_image_url || 'http://via.placeholder.com/700x250'
  return (
    <div className="row blog-header">
      <div className="col-sm-12 col-lg-7 col-md-12 left-col"
        style={{ backgroundImage: `url("${firstImage}")`}}>
        <Link to={`/blog/${featured[0].id}/${featured[0].title.toLowerCase().split(' ').join('-')}`} >
        <div className="description">
          <h1>{featured[0].title}</h1>
          <p>By {featured[0].author.name}</p>
        </div>
        </Link>
      </div>

      <div className="col-sm-12 col-md-12 col-lg-5 right-col">
        <Link to={`/blog/${featured[1].id}/${featured[1].title.toLowerCase().split(' ').join('-')}`} >
          <div className="row top-row"
            style={{ backgroundImage: `url("${secondImage}")`}}>
            <div className="description">
              <h3>{featured[1].title}</h3>
            </div>
          </div>
        </Link>

        <Link to={`/blog/${featured[2].id}/${featured[2].title.toLowerCase().split(' ').join('-')}`}  >
          <div className="row bottom-row"
            style={{ backgroundImage: `url("${thirdImage}")`}}>
              <div className="description">
                <h3>{featured[2].title}</h3>
              </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

BlogHeader.propTypes = {
  featured: PropTypes.array
}

export default BlogHeader;