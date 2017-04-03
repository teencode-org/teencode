import React, {PropTypes} from 'react';

const VideoSection = () =>
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
                  <br />gives a talk on why students should be introduced to programming.
                </p>
              </div>
          </div>
      </div>
  </section>

export default VideoSection;
