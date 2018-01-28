import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';
import { getProgresses } from '../../actions/progressActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProgressCircle from '../common/ProgressCircle';

class ProgressSection extends React.Component {
  componentWillMount() {
    this.props.getProgresses();
  }

  render() {
    let { progressData, hasBeenFetched } = this.props.progress;
    progressData = progressData || {};
    return (
      <section id="how" className="goals section">
        <div className="goals-overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-xs-center">
              <h4 className="section-heading">Our Goals for 2017</h4>
              <h3 className="section-subheading text-muted" />
            </div>
          </div>
          <div className="row" id="progress">
            <div className="col-xs-12">
              <div className="row">
                <ProgressCircle
                  key={`countries-${progressData.countries}`}
                  progressData={progressData.countries}
                  total={2}
                  goal="countries"
                  color="orange"
                  loadingShouldStop={hasBeenFetched}
                />
                <ProgressCircle
                  key={`schools-${progressData.schools}`}
                  progressData={progressData.schools}
                  total={100}
                  goal="schools reached"
                  color="green"
                  loadingShouldStop={hasBeenFetched}
                />
                <ProgressCircle
                  key={`students-${progressData.students}`}
                  progressData={progressData.students}
                  total={1000}
                  goal="students enrolled"
                  color="blue"
                  loadingShouldStop={hasBeenFetched}
                />
              </div>
            </div>
          </div>
          {!this.props.hideAboutUsLink &&
            <div className="row">
              <div className="col-xs-12">
                <div className="text-sm-right text-xs-center btn-mission">
                  <Link to="/about-us"
                        className="btn btn-primary">
                    See why these numbers are important to us
                  </Link>
                </div>
              </div>
            </div>}
        </div>
      </section>
    )
  }
}

ProgressSection.propTypes = {
  getProgresses: PropTypes.func,
  progress: PropTypes.object,
  hideAboutUsLink: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => {
  return {
    progress: state.progress,
    hideAboutUsLink: ownProps.hideAboutUsLink
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getProgresses
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgressSection);