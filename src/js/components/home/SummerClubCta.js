import React from 'react';
import { Link } from 'react-router';

const SummerClubCta = () =>
  <section id="cta" className="cta">
    <div className="container">
      <div className="row">
        <div className="col-md-7 col-xs-12">
          <h3 className="action">Teencode summer club</h3>
        </div>
        <div className="col-md-5 col-xs-12 text-md-right">
          <Link to="/summer-club" className="btn btn-action" >Register Now >></Link>
        </div>
      </div>
    </div>
  </section>

export default SummerClubCta;
