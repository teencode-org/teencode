import PropTypes from 'prop-types';
import React from 'react';
import logo from 'Images/logo-colored.png';
import { Link, browserHistory } from 'react-router';

import SingleQuestion from './SingleQuestion';
import criteriaList from './criteriaList';
import DocumentTitle from '../../common/DocumentTitle';


class EligibilityCheck extends React.Component {
  constructor() {
    super();
    this.state = this.getDefaultState();
  }

  componentWillMount() {
    this.setState(this.getDefaultState());
  }

  getDefaultState = () => {
    Object.keys(criteriaList).forEach(key => criteriaList[key].value = null);
    return {
      criteria: criteriaList,
      percentageCompletion: 0
    };
  };

  setCriterion = (criterion, value) => {
    let updatedCriterion = {[criterion.key]: criterion};
    this.setState({
      criteria: Object.assign(this.state.criteria, updatedCriterion),
      percentageCompletion: this.percentageCompletion()
    }, this.checkEligibility);
  };

  percentageCompletion = () => {
    const {criteria} = this.state;
    let criteriaKeys = Object.keys(criteria);
    let selected = 0;
    criteriaKeys.forEach(key => {
      if (criteria[key].value != null) selected++;
    });
    return (selected / criteriaKeys.length) * 100;
  };

  checkEligibility = () => {
    let eligible = null;
    const {criteria, percentageCompletion} = this.state;
    Object.keys(criteria).some((criterionKey) => {
      if (eligible == null) eligible = criteria[criterionKey].value;
      if (eligible != criteria[criterionKey].value) {
        eligible = false;
        return true;
      }
      return false;
    });
    if (percentageCompletion != 100) return;
    browserHistory.push(eligible ? '/partner-leads/apply' : '/feedback/error/ineligible');
  };

  render() {
    const {criteria, percentageCompletion} = this.state;
    let key = 0;
    return (
      <div className="container page-index eligibility-check">
        <div className="header">
          <img src={logo} />
          <Link to="/">
            <i className="fa fa-window-close" aria-hidden="true" />
          </Link>
        </div>

        <div className="page-title">
          <h2>Eligibility Check</h2>
          <small>For Schools</small>
        </div>

        <content className="wrapper">
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-valuenow="70"
                 aria-valuemin="0" aria-valuemax="100" style={{width: `${percentageCompletion}%`}}>
              <span className="sr-only">70% Complete</span>
            </div>
          </div>

          {Object.keys(criteria).map(criterion =>
            <SingleQuestion
              key={criterion}
              criterion={criteria[criterion]}
              setCriterion={this.setCriterion} />
          )}
        </content>
      </div>
    )
  }
}

export default DocumentTitle('Eligibility')(EligibilityCheck);