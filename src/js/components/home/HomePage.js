import React from 'react';
import { Link } from 'react-router';

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

      <section id="cta" className="cta">
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

      <section className="proof">
        <div className="container">
          <div className="row divide">
            <div className="col-sm-6"><p>Nigerian brothers Osite and Anime <span className="text-primary">Lorem ipsum</span> dolor sit amet, consectetur adipisicing elit. nobis rerum non rem repudiandae in consequuntur </p></div>
            <div className="col-sm-6"><p>Repellendus praesentium, nulla distinctio aperiam unde, tenetur explicabo, <span className="text-primary">hic beatae nisi quibusdam</span>, cum vero  temporibus!</p></div>
          </div>
        </div>
      </section>

      <section id="volunteer" className="volunteer">
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
                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                  "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                </p>
              </div>
              <div className="offset-md-6 col-md-6 col-xs-12">
                <div className="body-pad text-xs-right">
                  <p className="action">Show me who these volunteers are >></p>
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
                      <h4 className="section-heading">Help students succeed in a future of technology</h4>
                      <h3 className="section-subheading text-muted"></h3>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-10 offset-lg-1 col-xs-12 body-pad">
                    <div className="col-md-6">
                        <div className="service-col">
                          <img className="picture" src={require('../../../img/apply.svg')} alt="Apply" />
                          <h4 className="service-heading">Apply</h4>
                          <p className="text-muted">With our 3 month classes, we awaken the curiousity of learning to program in teens.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="service-col">
                          <img className="picture" src={require('../../../img/nurture.svg')} alt="Nurture" />
                          <h4 className="service-heading">Nurture</h4>
                          <p className="text-muted">With our 3 month classes, we awaken the curiousity of learning to program in teens.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="service-col">
                          <img className="picture" src={require('../../../img/mentor.svg')} alt="Mentor" />
                          <h4 className="service-heading">Mentor</h4>
                          <p className="text-muted">With our 3 month classes, we awaken the curiousity of learning to program in teens.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="service-col">
                          <img className="picture" src={require('../../../img/community.svg')} alt="Community" />
                          <h4 className="service-heading">Community</h4>
                          <p className="text-muted">With our 3 month classes, we awaken the curiousity of learning to program in teens.</p>
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

      <section id="sponsor" className="bg-lighter-blue section">
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
