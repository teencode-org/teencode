import React from 'react';
import { Link } from 'react-router';

import people from '../../../img/people.png';
import girl from '../../../img/girl_on_computer.jpg';
import puzzle1 from '../../../img/puzzle1.png';
import puzzle2 from '../../../img/puzzle2.png';
import puzzle3 from '../../../img/puzzle3.png';
import puzzle4 from '../../../img/puzzle4.png';

class HomePage extends React.Component {
  constructor(props, context){
    super(props);
  }

  render() {
    return (
      <div>
        <section className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="intro-text">
                  <div className="col-md-7 col-xs-12">
                    <div className="home-content body-pad">
                      <h1>6 out of 10 most successful tech geniuses started coding before the age of 15.</h1>
                    </div>
                  </div>
                  <div className="offset-md-6 col-md-6 col-xs-12">
                    <div className="home-content body-pad place text-xs-right">
                      <p className="font-italic">MaryLeakey High School - Saturday, March 11, 2017.</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-xs-12">
              <h3 className="action">High schools in Lagos can apply between 10th - 17th April, 2017</h3>
            </div>
            <div className="col-md-5 col-xs-12 text-md-right">
              <Link to="#" className="btn btn-action">Check if your school is eligible >></Link>
            </div>
          </div>
        </div>
      </section>

      <section id="reason" className="why section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 why-bg">
                <div className="col-lg-4 why-section">
                  <img src={girl} alt="Why" />
                </div>
                <div className="col-lg-2 why-section last">
                </div>
                <div className="col-lg-6 why-section last">
                  <div className="why-text body-pad">
                      <h4>Why?</h4>
                      <div>
                          <p className="text-muted">Everyone in this country should learn how to program a computer.
                            It teaches you to think. - Steve Jobs</p>
                            <p className="text-muted">It's more about the proces of breaking down problems into simpler units
                            than coming out with complex algorithms. - Makinde, early Facebook Engineer</p>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="whoami whoami-bg section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 whoami-section">
              <div className="whoami-text body-pad">
                  <h4>Who We Are</h4>
                  <div>
                      <p className="text-muted">We are Andelans. 
                        An entire community of software devlopers in Lagos and Nairobi. 
                        We work with tech companies around the world.
                      </p>
                  </div>
              </div>
            </div>
            <div className="col-lg-6 whoami-section">
              <img src={people} alt="Who we are" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-light-blue section">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-xs-center body-pad">
                      <h4 className="section-heading">How we do this?</h4>
                      <h3 className="section-subheading text-muted"></h3>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-10 offset-lg-1 col-xs-12 body-pad">
                    <div className="col-md-6 service-col">
                        <div className="col-md-2 col-sm-2 pull-sm-left pull-xs-right">
                          <img className="puzzle" src={puzzle1} alt="puzzle" />
                        </div>
                        <div className="col-md-10 col-sm-10">
                          <h4 className="service-heading">Develop</h4>
                          <p className="text-muted">With our 3 month classes, we awaken the curiousity of learning to program in teens.</p>
                        </div>
                    </div>
                    <div className="col-md-6 service-col">
                        <div className="col-md-2 col-sm-2 pull-sm-left pull-xs-right">
                          <img className="puzzle" src={puzzle2} alt="puzzle" />
                        </div>
                        <div className="col-md-10 col-sm-10">
                          <h4 className="service-heading">Design</h4>
                          <p className="text-muted">We guide teens through a process of tackiling their favorite problem through technology.</p>
                        </div>
                    </div>
                    <div className="col-md-6 service-col">
                        <div className="col-md-2 col-sm-2 pull-sm-left pull-xs-right">
                          <img className="puzzle" src={puzzle3} alt="puzzle" />
                        </div>
                        <div className="col-md-10 col-sm-10">
                          <h4 className="service-heading">Mentor</h4>
                          <p className="text-muted">Very experienced developers take it upon themselves to oversee continued growth.</p>
                        </div>
                    </div>
                    <div className="col-md-6 service-col">
                        <div className="col-md-2 col-sm-2 pull-sm-left pull-xs-right">
                          <img className="puzzle" src={puzzle4} alt="puzzle" />
                        </div>
                        <div className="col-md-10 col-sm-10">
                          <h4 className="service-heading">Community</h4>
                          <p className="text-muted">Teens across different geographical regions, bound by an interest in tech, supporting each other</p>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </section>

      <section id="video" className="why section">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-md-center body-pad embed-pad">
                      <div className="embed">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Fkd9TWUtFm0" allowFullScreen></iframe>
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

      <section id="sponsor" className="bg-light-blue section">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-md-center body-pad">
                      <h4 className="section-subheading text-muted">#teencode is proudly supported by </h4>
                      <h1 className="section-heading text-muted">&lt; Andela &gt;</h1>
                  </div>
              </div>              
          </div>
      </section>
    </div>
    )
  }
}

export default HomePage
