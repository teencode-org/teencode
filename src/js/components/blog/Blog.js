import React, { Component } from 'react';
import BlogHeader from './BlogHeader';
import BlogList from './BlogList';

export default class Blog extends Component {
  render() {
    return (
      <div>
        <BlogHeader />
        <BlogList />
      </div>
    );
  }
}