import React, {PropTypes} from 'react';

const VideoSection = () =>
    <section id="video" className="why bg-lighter-blue section">
      <div className="container">
          <div className="row">
              <div className="offset-lg-2 offset-md-1 col-lg-8 col-md-10 col-sm-12 text-md-center embed-pad">
                <div className="embed">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="//www.youtube.com/embed/Fkd9TWUtFm0" allowFullScreen></iframe>
                  </div>
                </div>
                <p className="lead">
                  Thomas Suarez - 12 year old app developer
                  <br />gives a talk on why students should be introduced to programming.
                </p>
              </div>
          </div>
      </div>
  </section>

export default VideoSection;
