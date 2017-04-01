import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const EligibilityCheckCtaSection = (checkEligibility) =>
  <section id="cta" className="cta">
    <div className="container">
      <div className="row">
        <div className="col-md-7 col-xs-12">
          <h3 className="action">High schools in Lagos can apply between 10th - 17th April, 2017</h3>
        </div>
        <div className="col-md-5 col-xs-12 text-md-right">
          <Link to="/partner_leads/check_eligibility" className="btn btn-action" >Check if your school is eligible >></Link>
        </div>
      </div>
    </div>
  </section>

export default EligibilityCheckCtaSection;
