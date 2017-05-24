import React, {PropTypes} from 'react';
import { Link } from 'react-router';

class GoalsSection extends React.Component {
  constructor(props) {
    super(props);
    this.animateProgess = this.animateProgess.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.animateProgess);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.animateProgess);
  }

  animateProgess(event) {
    const progressCircles = document.querySelector('#progress');
    const progressCirclesHeight = progressCircles.clientHeight;
    const progressCirclesTop = progressCircles.offsetTop;
    const scrollTop = document.body.scrollTop;
    const heightToStartOfProgressCircles = progressCirclesTop - window.innerHeight + progressCirclesHeight;
    const heightToEndOfProgressCircles = progressCirclesTop + progressCirclesHeight;

    document.querySelectorAll('.progress-circle').forEach((progressCircle) => {
      if (scrollTop > heightToStartOfProgressCircles && scrollTop < heightToEndOfProgressCircles) {
        if (progressCircle.getAttribute('data-progress') !== progressCircle.getAttribute('data-goal')) {
          progressCircle.setAttribute('data-progress', progressCircle.getAttribute('data-goal'));
        }
      } else {
        progressCircle.setAttribute('data-progress', 0);
      }
    }, this);
  }

  render() {
    return (
    <section id="how" className="goals section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-xs-center">
            <h4 className="section-heading">Our Goals for 2017</h4>
            <h3 className="section-subheading text-muted"></h3>
          </div>
        </div>
        <div className="row" id="progress">
          <div className="col-lg-10 offset-lg-1 col-xs-12">
            <div className="row">
              <div className="col-md-4">
                <div className="progress-circle" data-goal="100" data-progress="0">
                  <div className="circle">
                      <div className="full progress-circle-slice">
                          <div className="progress-circle-fill progress-circle-orange"></div>
                      </div>
                      <div className="progress-circle-slice">
                          <div className="progress-circle-fill progress-circle-orange"></div>
                          <div className="progress-circle-fill progress-circle-bar"></div>
                      </div>
                  </div>
                  <div className="progress-circle-overlay">
                    <span className="progress-circle-percent">
                      2/<span>2</span>
                      <p className="progress-circle-caption">countries</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="progress-circle" data-goal="15" data-progress="0">
                  <div className="circle">
                      <div className="full progress-circle-slice">
                          <div className="progress-circle-fill progress-circle-green"></div>
                      </div>
                      <div className="progress-circle-slice">
                          <div className="progress-circle-fill progress-circle-green"></div>
                          <div className="progress-circle-fill progress-circle-bar"></div>
                      </div>
                  </div>
                  <div className="progress-circle-overlay">
                    <span className="progress-circle-percent">
                      15/<span>100</span>
                      <p className="progress-circle-caption">schools reached</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="progress-circle" data-goal="21" data-progress="0">
                  <div className="circle">
                      <div className="full progress-circle-slice">
                          <div className="progress-circle-fill progress-circle-blue"></div>
                      </div>
                      <div className="progress-circle-slice">
                          <div className="progress-circle-fill progress-circle-blue"></div>
                          <div className="progress-circle-fill progress-circle-bar"></div>
                      </div>
                  </div>
                  <div className="progress-circle-overlay">
                    <span className="progress-circle-percent">
                      214/<span>1000</span>
                      <p className="progress-circle-caption">students enrolled</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
}

export default GoalsSection;
