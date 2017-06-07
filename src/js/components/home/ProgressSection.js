import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import { getCountries } from '../../actions/progressActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class ProgressSection extends React.Component {
  constructor(props) {
    super(props);
    this.animateProgess = this.animateProgess.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.animateProgess);
    this.props.getCountries()
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.animateProgess);
  }

  getProgressValueAndPercentage(progressData, total) {
    if (progressData) {
      return {
        value: progressData.length,
        percentage: progressData.length / total * 100
      };
    }
    return 0;
  }

  animateProgess(event) {
    document.querySelectorAll('.progress-circle').forEach((progressCircle, index) => {
      const scrollTop = document.body.scrollTop;
      const progressCircleTop = progressCircle.getBoundingClientRect().top + window.scrollY;
      const heightToStartOfProgressCircle = progressCircleTop + progressCircle.clientHeight - window.innerHeight;

      if (scrollTop < heightToStartOfProgressCircle) {
        progressCircle.setAttribute('data-progress', 0);
      } else {
        if (progressCircle.getAttribute('data-progress') !== progressCircle.getAttribute('data-goal')) {
          progressCircle.setAttribute('data-progress', progressCircle.getAttribute('data-goal'));
        }
      }
    }, this);
  }

  render() {
    const { hasBeenFetched, countriesList } = this.props.progress;
    const countryData = this.getProgressValueAndPercentage(countriesList, 2);
    console.log("countries", countriesList);
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
            <div className="col-xs-12">
              <div className="row">
                <div className="col-md-4">
                  <div className="progress-circle progress-circle-orange" data-goal={countryData.percentage} data-progress="0">
                    <div className="circle">
                        <div className="full progress-circle-slice">
                            <div className="progress-circle-fill"></div>
                        </div>
                        <div className="progress-circle-slice">
                            <div className="progress-circle-fill"></div>
                            <div className="progress-circle-fill progress-circle-bar"></div>
                        </div>
                    </div>
                    <div className="progress-circle-overlay">
                      <span className="progress-circle-percent">
                        {countryData.value}/<span>2</span>
                        <p className="progress-circle-caption">countries</p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="progress-circle progress-circle-green" data-goal="15" data-progress="0">
                    <div className="circle">
                        <div className="full progress-circle-slice">
                            <div className="progress-circle-fill"></div>
                        </div>
                        <div className="progress-circle-slice">
                            <div className="progress-circle-fill"></div>
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
                  <div className="progress-circle progress-circle-blue" data-goal="21" data-progress="0">
                    <div className="circle">
                        <div className="full progress-circle-slice">
                            <div className="progress-circle-fill"></div>
                        </div>
                        <div className="progress-circle-slice">
                            <div className="progress-circle-fill"></div>
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
          <div className="row">
            <div className="col-xs-12">
              <div className="text-sm-right text-xs-center btn-mission">
                <Link to="/mission" className="btn btn-primary">See why these numbers are important to us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

ProgressSection.propTypes = {
  getCountries: PropTypes.func,
  progress: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    progress: state.progress
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCountries: getCountries
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgressSection);
