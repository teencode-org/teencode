import React from 'react';

const BlogHeader = () => {
  return (
    <div className="row blog-header">
      <div className="col-sm-12 col-lg-7 col-md-12 left-col">
        <div className="description">
          <h1>Brilliance is evenly distributed.<br/>We're doing the same for opportunity</h1>
          <p>By Rowland Henshaw</p>
        </div>
      </div>
      <div className="col-sm-12 col-md-5 right-col">
        <div className="row top-row">
          <div className="description">
            <h3>Teencode facilitators taken on<br /> Koriobangi</h3>
          </div>
        </div>
        <div className="row bottom-row">
          <div className="description">
            <h3>No better time to invoke creativity <br /> than the young</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogHeader;