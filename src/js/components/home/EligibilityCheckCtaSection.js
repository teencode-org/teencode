import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';


const EligibilityCheckCtaSection = (checkEligibility) =>
  <section id="cta" className="cta">
    <div className="container">
      <div className="row">
        <div className="col-md-7 col-xs-12">
          <h3 className="action">High Schools in Lagos and Nairobi can apply to partner with us<span className="ribbon"> FREE</span></h3>
        </div>
        <div className="col-md-5 col-xs-12 text-md-right">
          <Link to="/partner-leads/check-eligibility" className="btn btn-action" >Check if your school is eligible >></Link>
        </div>
      </div>
    </div>
  </section>

export default EligibilityCheckCtaSection;