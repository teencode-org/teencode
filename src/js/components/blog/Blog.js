import React, { Component } from 'react';
import MainBannerSection from '../home/MainBannerSection';


export default class Blog extends Component {
  render() {
    return (
      <div>
        <div className="row blog-header">
          <div className="col-sm-12 col-md-7 left-col">
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
            <div className="row blog-article">
              <div className="blog-article-image">
                <img src="http://via.placeholder.com/300x300" />
              </div>
              <div className="blog-article-info">
                <h2 className="article-title">There will be no prisons if our minds were free</h2>
                <p className="article-author">by Rowland Henshaw</p>
                <p className="article-summary">
                  The alarms that wake us up, the tools with which we plan our day, our interactions with friends and colleagues, automations in business processes, you name it
                </p>
                <button className="btn">Read More ></button>
              </div>
            </div>
            <div className="row blog-article">
              <div className="blog-article-image">
                <img src="http://via.placeholder.com/300x300" />
              </div>
              <div className="blog-article-info">
                <h2 className="article-title">Gender balance in tech could be achieved if only we start early.</h2>
                <p className="article-author">by Rowland Henshaw</p>
                <p className="article-summary">
                  The alarms that wake us up, the tools with which we plan our day, our interactions with friends and colleagues, automations in business processes, you name it
                </p>
                <button className="btn">Read More ></button>
              </div>
            </div>
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