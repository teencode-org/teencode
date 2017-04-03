import React, {PropTypes} from 'react';

const SponsorSection = () =>
  <section id="sponsor" className="bg-green section sponsored-by">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-md-center body-pad">
          <h3>#teencode is powered by</h3>
        </div>
        <div className="col-md-4 offset-md-4 col-xs-12">
          <a href="http://andela.com" target="_blank"><img className="andela-logo" src={require('../../../img/andela-white-logo.png')} alt="Andela" /></a>
        </div>
      </div>
    </div>
  </section>

export default SponsorSection;
