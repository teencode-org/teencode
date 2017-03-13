import React from 'react';
import { Link } from 'react-router';

import introImage from '../../../img/intro.png';
import people from '../../../img/people.png';
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
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="intro-text">
                  <div className="col-md-6 col-xs-12 pull-md-right pull-xs-none">
                    <div id="banner">
                      <div id="underlay-image"><img src={introImage}/></div>
                      <div><img src={introImage} alt="background image" /></div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <div className="home-content">
                      <h1>We Teach Teens to Code</h1>
                      <p>We are Lorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente</p>
                      <p><span className="action">Don't Stop Them</span></p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="team" className="whoami">
          <div className="row">
              <div className="col-lg-10 offset-lg-1 whoami-bg">
                  <div className="col-lg-4 whoami-section">
                    <img src={people} alt="Who we are" />
                  </div>
                  <div className="col-lg-2 whoami-section last">
                  </div>
                  <div className="col-lg-6 whoami-section last">
                    <div className="col-lg-8 offset-lg-2 whoami-text">
                        <h4>Who We Are</h4>
                        <div>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
      </section>

      <section id="services" className="bg-light-blue">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-md-center">
                      <h4 className="section-heading">What We Do</h4>
                      <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-10 offset-lg-1 col-xs-12">
                    <div className="col-md-6 service-col">
                        <div className="col-md-2 col-sm-2 pull-sm-left pull-xs-right">
                          <img className="puzzle" src={puzzle1} alt="puzzle" />
                        </div>
                        <div className="col-md-10 col-sm-10">
                          <h4 className="service-heading">Develop</h4>
                          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                    </div>
                    <div className="col-md-6 service-col">
                        <div className="col-md-2 col-sm-2 pull-sm-left pull-xs-right">
                          <img className="puzzle" src={puzzle2} alt="puzzle" />
                        </div>
                        <div className="col-md-10 col-sm-10">
                          <h4 className="service-heading">Design</h4>
                          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                    </div>
                    <div className="col-md-6 service-col">
                        <div className="col-md-2 col-sm-2 pull-sm-left pull-xs-right">
                          <img className="puzzle" src={puzzle3} alt="puzzle" />
                        </div>
                        <div className="col-md-10 col-sm-10">
                          <h4 className="service-heading">Impact</h4>
                          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                    </div>
                    <div className="col-md-6 service-col">
                        <div className="col-md-2 col-sm-2 pull-sm-left pull-xs-right">
                          <img className="puzzle" src={puzzle4} alt="puzzle" />
                        </div>
                        <div className="col-md-10 col-sm-10">
                          <h4 className="service-heading">Mentor</h4>
                          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </section>
    </div>
    )
  }
}

export default HomePage
