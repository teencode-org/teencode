import React from 'react';
import { Link } from 'react-router';

class TestimonySection extends React.Component {
  constructor(props, context){
    super(props);
  }

  render() {
    return (
      <section className="testimony">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="intro-text">
                <div className="col-md-11 col-xs-12">
                  <h1>
                    "I was in love with our session and our instructor Getrude. 
                    It was challenging, fun and inspirational. Now I know I can be an IT expert.
                    I look forward to more classes"
                  </h1>
                  <p className="testifier">Joyce Kinuthia</p>
                  <p className="location">Form 4 Arts Student<br/>MaryLeakey Girls High School, Nairobi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
     
export default TestimonySection;
