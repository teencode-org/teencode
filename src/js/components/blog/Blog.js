import React, { Component } from 'react';
import MainBannerSection from '../home/MainBannerSection';

export default class Blog extends Component {
  render() {
    return (
      <div>
      <MainBannerSection />
        <div className="container">
          <h1>Blog</h1>
        </div>
      </div>
    );
  }
}