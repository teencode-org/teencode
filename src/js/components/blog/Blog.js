import React, { Component } from 'react';
import BlogListArticle from './BlogListArticle';
import MainBannerSection from '../home/MainBannerSection';


export default class Blog extends Component {
  render() {
    return (
      <div>
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
        <div className="container">
          <div className="blog-list">
            <h3>Top articles</h3>
            <BlogListArticle
              imageUrl="http://via.placeholder.com/300x300"
              title="There will be no prisons if our minds were free"
              author="by Rowland Henshaw"
              summary="The alarms that wake us up, the tools with which we plan our day, our interactions with friends and colleagues, 
              automations in business processes, you name it"
            />

            <BlogListArticle
              imageUrl="http://via.placeholder.com/300x300"
              title="Gender balance in tech could be achieved if only we start early."
              author="by Rowland Henshaw"
              summary="The alarms that wake us up, the tools with which we plan our day, our interactions with friends and colleagues, 
              automations in business processes, you name it"
            />
          </div>

          <div className="load-more-container">
            <i className="fa fa-refresh"></i>
            <p>Going to classrooms to fetch more articles ...</p>
          </div>
        </div>
      </div>
    );
  }
}