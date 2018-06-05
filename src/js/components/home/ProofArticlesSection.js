import PropTypes from 'prop-types';
import React from 'react';

const ProofArticlesSection = () =>
  <section className="proof">
    <div className="container">
      <div className="row divide">
        <div className="col-sm-6">
          <p>Nigeria brothers Osite and Anime
            <a href="http://techcabal.com/2015/04/23/meet-osine-and-anesi-the-nigerian-teenagers-who-built-a-mobile-web-browser/" target="_blank">
                    <span className="text-primary">
                      &nbsp;built a mobile browser
                    </span>
            </a> at ages 13 and 15 respectively
          </p>
        </div>
        <div className="col-sm-6">
          <p>17 year old Collins Nji, a Cameroonian art-inclined student, is the
            <a href="https://qz.com/909614/a-cameroonian-17-year-old-won-the-google-code-in-after-the-internet-was-shut-down-in-his-hometown-of-bamenda/" target="_blank" className="text-primary">
              &nbsp;first African to ever win Google’s Code-in competition.
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>

export default ProofArticlesSection;