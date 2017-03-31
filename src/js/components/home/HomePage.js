import React from 'react';
import { Link } from 'react-router';
import TestimonySection from './TestimonySection';

class HomePage extends React.Component {
  constructor(props, context){
    super(props);
  }

  componentDidMount() {
    window.analytics.page();   
  }

  viewForm(e) {
    e.preventDefault();
    window.analytics.track('View Application Form', {
      category: 'Application'
    });
  }

  submitForm(e) {
    e.preventDefault();
    window.analytics.track('Submit', {
      category: 'Application',
      label: 'Submit Application Form'
    });
  }

  checkEligibility(e) {
    e.preventDefault();
    window.analytics.track('View Eligibility', {
      category: 'Show Interest', 
      label: 'Check Requirements'
    });
  }
  
  submitDetails(e) {
    e.preventDefault();
    window.analytics.track('Submit', {
      category: 'Show Interest',
      label: 'Submit Email'
    });
  }

  render() {
    return (
      <div>
        <section className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="intro-text">
                  <div className="col-md-9 col-xs-12 banner-text">
                    <div className="home-content body-pad">
                      <h1>6 out of 10 most successful tech geniuses started coding before the age of 15.</h1>
                    </div>
                  </div>
                  <div className="offset-md-6 col-md-6 col-xs-12 muted-banner-desc">
                    <div className="home-content body-pad place text-xs-right">
                      <p className="font-italic">Kariobangi High School - Saturday, March 11, 2017.</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="cta">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-xs-12">
              <h3 className="action">High schools in Lagos can apply between 10th - 17th April, 2017</h3>
            </div>
            <div className="col-md-5 col-xs-12 text-md-right">
              <Link to="#" className="btn btn-action" onClick={this.checkEligibility}>Check if your school is eligible >></Link>
            </div>
          </div>
        </div>
      </section>

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
                <span className="text-primary">
                  &nbsp;first African to ever win Google’s Code-in competition.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="volunteer" className="volunteers">
        <div className="container">
          <div className="row profile">
            <div className="col-md-3 col-xs-12">
              <img src={require('../../../img/volunteer.jpeg')} className="img-thumbnail picture hidden-xs" />
              <h4 className="name">Oluwadamilola Adebayo</h4>
              <p className="title">Software developer at Andela</p>
              <p className="role">Teencode volunteer facilitator</p>
            </div>
            <div className="col-md-9 col-xs-12">
              <div className="header">
                <h4>How is your high school preparing the next generation of Africa's tech leaders?</h4>
                <p>Teencode pairs volunteer professional developers to high schools so they teach teenagers how to build programs that solve useful problems.</p>
              </div>
              <div className="offset-md-6 col-md-6 col-xs-12">
                <div className="body-pad text-xs-right">
                  <Link to="/volunteers"><p className="action">Show me who these volunteers are >></p></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="how bg-lighter-blue section">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-xs-center body-pad">
                      <h4 className="section-heading">Partner with us to help students succeed in a future of technology</h4>
                      <h3 className="section-subheading text-muted"></h3>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-10 offset-lg-1 col-xs-12 body-pad">
                    <div className="col-md-6">
                        <div className="service-col">
                          <img className="picture" src={require('../../../img/apply.svg')} alt="Apply" />
                          <h4 className="service-heading">Apply</h4>
                          <p className="text-muted">We reach out to schools that apply to agree on terms and work out a schedule that is fitting.
                            <Link to="/eligibility"><span className="text-primary">&nbsp;Check if your school is eligible.</span></Link>
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
                          <p className="text-muted">Teens across different geographical region, bound by an interest in tech are pull together, to support each other.
                            <Link to="/communities">&nbsp;Take a peek at our communities.</Link>
                          </p>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </section>

      <TestimonySection />

      <section id="video" className="why section">
          <div className="container">
              <div className="row">
                  <div className="offset-sm-2 col-sm-8 text-md-center body-pad embed-pad">
                    <div className="embed">
                      <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="//www.youtube.com/embed/Fkd9TWUtFm0" allowFullScreen></iframe>
                      </div>
                    </div>
                    <p className="text-muted lead">
                      Thomas Suarez - 12 year old app developer 
                      <br />gives quality advice to ... um ... everyone!
                    </p>
                  </div>
              </div>
          </div>
      </section>

      <section id="sponsor" className="bg-green section sponsored-by">
          <div className="container">
              <div className="row">
                  <div className="col-md-12 text-md-center body-pad">
                      <h3>#teencode is proudly powered by</h3>
                  </div>
                  <div className="col-md-4 offset-md-4 col-xs-12">
                    <a href="http://andela.com" target="_blank"><img className="andela-logo" src={require('../../../img/andela-white-logo.png')} alt="Andela" /></a>
                  </div>
              </div>              
          </div>
      </section>
    </div>
    )
  }
}

export default HomePage
