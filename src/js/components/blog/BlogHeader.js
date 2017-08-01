import React from 'react';

const BlogHeader = ({featured}) => {
  let firstImage = featured[0].featured_image_url || 'http://via.placeholder.com/700x500'
  let secondImage = featured[1].featured_image_url || 'http://via.placeholder.com/700x250'
  let thirdImage = featured[2].featured_image_url || 'http://via.placeholder.com/700x250'
  return (
    <div className="row blog-header">
      <div className="col-sm-12 col-lg-7 col-md-12 left-col"
        style={{ backgroundImage: `url("${firstImage}")`}}>
        <div className="description">
          <h1>{featured[0].title}</h1>
          <p>By {featured[0].author.name}</p>
        </div>
      </div>

      <div className="col-sm-12 col-md-5 right-col">
        <div className="row top-row"
          style={{ backgroundImage: `url("${secondImage}")`}}>
          <div className="description">
            <h3>{featured[1].title}</h3>
          </div>
        </div>

        <div className="row bottom-row"
          style={{ backgroundImage: `url("${thirdImage}")`}}>
          <div className="description">
            <h3>{featured[2].title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogHeader;