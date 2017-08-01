import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

const LoadMore = ({ onLoad }) => (
  <div className="load-more-container">
    <Waypoint onEnter={onLoad} />
    <i className="fa fa-refresh" />
    <p>Going to classrooms to fetch more articles ...</p>
  </div>
);

export default LoadMore;
