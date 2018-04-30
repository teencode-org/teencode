import PropTypes from 'prop-types';
import React from 'react';


const MainBannerSection = () =>
  <section id="intro" className="intro">
    <div className="overlay">
      <div className="container">
        <div className="row">
          <div className="intro-text">
            <div className="col-md-9 col-xs-12 banner-text">
              <div className="home-content">
                <h1><a href="http://www.investopedia.com/articles/personal-finance/072715/10-richest-most-successful-tech-geniuses.asp" className="text-primary" target="_blank">6 out of 10</a> most successful tech leaders started coding before the age of 15.</h1>
              </div>
            </div>
            <div className="offset-md-6 col-md-6 col-xs-12 muted-banner-desc">
              <div className="home-content place text-xs-right">
                <p className="font-italic">Kariobangi High School - Saturday, March 11, 2017.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

export default MainBannerSection;