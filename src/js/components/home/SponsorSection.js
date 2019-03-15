import React from 'react';
import andelaLogo from 'Images/andela-white-logo.png'
import logo from 'Images/logo-colored.png';

const SponsorSection = () =>
  <section id="sponsor" className="bg-green section sponsored-by">
    <div className="container">
      <div className="row text-xs-center">
        <div className="col-md-12">
          <h3 className="powered-by">#teencode is powered by</h3>
        </div>
        <div className="col-md-4 offset-md-4 col-xs-12">
          <a href="http://andela.com" target="_blank"><img className="andela-logo" src={andelaLogo} alt="Andela" /></a>
        </div>
      </div>
    </div>
  </section>

export default SponsorSection;
