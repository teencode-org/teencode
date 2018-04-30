import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';


const HowSection = () =>
  <section id="how" className="how bg-lighter-blue section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-xs-center">
          <h4 className="section-heading">Partner with us to help students succeed in a future of technology</h4>
          <h3 className="section-subheading text-muted"></h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 offset-lg-1 col-xs-12">
          <div className="row">
            <div className="col-md-6">
              <div className="service-col">
                <img className="picture" src={require('../../../img/apply.svg')} alt="Apply" />
                <h4 className="service-heading">Apply</h4>
                <p className="text-muted">We reach out to schools that apply to agree on terms and work out a schedule that is fitting.
                  <Link to="/partner-leads/check-eligibility"><span className="text-primary">&nbsp;Check if your school is eligible.</span></Link>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-col">
                <img className="picture" src={require('../../../img/nurture.svg')} alt="Nurture" />
                <h4 className="service-heading">Nurture</h4>
                <p className="text-muted">Students in
                  <Link to="/partners"><span className="text-primary"> &nbsp;schools we partner with</span></Link>
                  &nbsp;are taken through 3-months of classes that build up into building a real useful apps.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="service-col">
                <img className="picture" src={require('../../../img/mentor.svg')} alt="Mentor" />
                <h4 className="service-heading">Mentor</h4>
                <p className="text-muted">
                  <Link to="/volunteers" className="text-primary">Very experienced software developers</Link>
                  &nbsp;take it upon themselves to oversee continued growth of the students during and after the 3 month programme.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-col">
                <img className="picture" src={require('../../../img/community.svg')} alt="Community" />
                <h4 className="service-heading">Community</h4>
                <p className="text-muted">Teens across different geographical region, bound by an interest in tech are pulled together, to support each other.
                  <Link to="/communities">&nbsp;Take a peek at our communities.</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

export default HowSection;