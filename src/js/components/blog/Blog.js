import React, { Component } from 'react';
import BlogHeader from './BlogHeader';
import BlogList from './BlogList';

export default class Blog extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <BlogHeader />
        <BlogList />
      </div>
    );
  }
}