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
  }

  setCriterion = (criterion, value) => {
    let updatedCriterion = {[criterion.key]: criterion};
    this.setState({
      criteria: Object.assign(this.state.criteria, updatedCriterion)
    });
    this.checkEligibility();
  }

  checkEligibility = () => {
    let eligible = true;
    Object.keys(this.state.criteria).some((criterionKey) => {
      return (!(eligible = this.state.criteria[criterionKey].value))
    });
    if (!eligible) return
    browserHistory.push('/partner_leads/apply');
  }

  render() {
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

          {Object.keys(this.state.criteria).map(criterion =>
            <SingleQuestion
              criterion={this.state.criteria[criterion]}
              setCriterion={this.setCriterion} />
          )}
        </content>
      </div>
    )
  }
}

export default EligibilityCheck;
