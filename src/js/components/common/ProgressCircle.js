import React, {PropTypes} from 'react';
import InlineLoader from './InlineLoader';

class ProgressCircle extends React.Component {
  constructor(props) {
    super(props);
    this.friendlyProgressData = this.getProgressValueAndPercentage();
  }

  componentDidMount() {
    document.addEventListener('scroll', this.animateProgess);
    this.friendlyProgressData = this.getProgressValueAndPercentage();
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.animateProgess);
  }

  getProgressValueAndPercentage = () => {
    const { progressData, progressDataKey, total } = this.props;
    if (progressData) {
      return {
        value: progressData,
        percentage: Math.round(progressData / total * 100)
      };
    }
    return { value: 0, percentage: 0 };
  }

  animateProgess = (event) => {
    const scrollTop = document.body.scrollTop;
    const progressCircleTop = this.component.getBoundingClientRect().top + window.scrollY;
    const heightToStartOfProgressCircle = progressCircleTop + this.component.clientHeight - window.innerHeight;

    if (scrollTop < heightToStartOfProgressCircle) {
      this.component.setAttribute('data-progress', 0);
    } else {
      if (this.component.getAttribute('data-progress') !== this.component.getAttribute('data-goal')) {
        this.component.setAttribute('data-progress', this.component.getAttribute('data-goal'));
      }
    }
  }

  setComponentRef = (ref) => {
    this.component = ref;
  }

  generateProgressStat = () => {
    const { loadingShouldStop, total } = this.props;
    if (loadingShouldStop) {
      return (
        <span>
          {this.friendlyProgressData.value}/<span>{total}</span>
        </span>
      );
    }
    return <InlineLoader/>
  }

  render() {
    const { color, goal } = this.props;
    return (
      <div className="col-md-4">
        <div
          className={`progress-circle progress-circle-${color}`}
          data-goal={this.friendlyProgressData.percentage}
          data-progress={0}
          ref={this.setComponentRef} >
          <div className="circle">
              <div className="full progress-circle-slice">
                  <div className="progress-circle-fill" />
              </div>
              <div className="progress-circle-slice">
                  <div className="progress-circle-fill" />
                  <div className="progress-circle-fill progress-circle-bar" />
              </div>
          </div>
          <div className="progress-circle-overlay">
            <span className="progress-circle-percent">
              {this.generateProgressStat()}
              <p className="progress-circle-caption">{goal}</p>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

ProgressCircle.propTypes = {
  progressData: PropTypes.number,
  total: PropTypes.number,
  goal: PropTypes.string,
  color: PropTypes.string
};

export default ProgressCircle;
