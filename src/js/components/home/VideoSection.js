import React, {PropTypes} from 'react';

const VideoSection = () =>
    <section id="video" className="why section">
      <div className="container">
          <div className="row">
              <div className="offset-md-2 col-md-8 col-sm-12 text-md-center embed-pad">
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
