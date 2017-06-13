import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import { getProgresses } from '../../actions/progressActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProgressCircle from '../common/ProgressCircle';

class ProgressSection extends React.Component {
  componentDidMount() {
    this.props.getProgresses();
  }

  render() {
    const { progressData, hasBeenFetched } = this.props.progress;
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
                  progressData={progressData}
                  total={2}
                  goal="countries"
                  progressDataKey="countries"
                  color="orange"
                  loadingShouldStop={hasBeenFetched}
                />
                <ProgressCircle
                  progressData={progressData}
                  total={100}
                  goal="schools reached"
                  progressDataKey="schools"
                  color="green"
                  loadingShouldStop={hasBeenFetched}
                />
                <ProgressCircle
                  progressData={progressData}
                  total={1000}
                  goal="students enrolled"
                  progressDataKey="students"
                  color="blue"
                  loadingShouldStop={hasBeenFetched}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="text-sm-right text-xs-center btn-mission">
                <Link to="/about-us" className="btn btn-primary">See why these numbers are important to us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

ProgressSection.propTypes = {
  getProgresses: PropTypes.func,
  progress: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    progress: state.progress
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
