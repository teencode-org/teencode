import React, {PropTypes} from 'react';
import logo from '../../../../img/logo-colored.png';
import {Link, browserHistory} from 'react-router';
import SingleQuestion from './SingleQuestion';
import criteriaList from './criteriaList';

class EligibilityCheck extends React.Component {
  constructor() {
    super();
    this.state = {
      criteria: criteriaList
    };
  };

  setCriterion = (criterion, value) => {
    let updatedCriterion = {[criterion.key]: criterion};
    this.setState({
      criteria: Object.assign(this.state.criteria, updatedCriterion)
    });
    this.checkEligibility();
  };

  checkEligibility = () => {
    let eligible = null;
    const {criteria} = this.state;
    Object.keys(criteria).some((criterionKey) => {
      if (eligible == null) eligible = criteria[criterionKey].value;
      if (eligible != criteria[criterionKey].value) {
        eligible = null;
        return true;
      }
      return false;
    });
    if (eligible == null) return;
    browserHistory.push(eligible ? '/partner-leads/apply' : '/partner-leads/ineligible');
  };

  render() {
    const {criteria} = this.state;
    let key = 0;
    return (
      <div className="container eligibility-check">
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

export default EligibilityCheck;
