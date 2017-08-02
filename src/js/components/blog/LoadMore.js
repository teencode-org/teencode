import React, { Component, PropTypes } from 'react';
import Waypoint from 'react-waypoint';

const LoadMore = ({ onLoad }) => (
  <div className="load-more-container">
    <Waypoint onEnter={onLoad} />
    <i className="fa fa-refresh fa-spin" />
    <p>Going to classrooms to fetch more articles ...</p>
  </div>
);

LoadMore.propTypes = {
  onLoad: PropTypes.func
}

export default LoadMore;
