import React, {PropTypes} from 'react';
import logo from '../../../../img/logo-colored.png';
import {Link} from 'react-router';

class EligibilityCheck extends React.Component {
  render() {
    return (
      <div className="container eligibility-check">
        <div className="header">
          <img src={logo} />
          <Link to="/">
            <i className="fa fa-window-close" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="page-title">
          <h2>Eligibility Check</h2>
          <small>For Schools</small>
        </div>
        <content className="wrapper">
          <div className="single-question">
            <div className="question">
              Is your school a high school?
            </div>
            <div className="response">
              <button className="btn btn-success">Yes</button>
              <button className="btn btn-default">No</button>
            </div>
          </div>
          <div className="single-question">
            <div className="question">
              Does your school have a computer laboratory with working computers?
            </div>
            <div className="response">
              <button className="btn btn-success">Yes</button>
              <button className="btn btn-default">No</button>
            </div>
          </div>
          <div className="single-question">
            <div className="question">
              Can the computer laboratory be consistenly powered for at least two hours every day?
            </div>
            <div className="response">
              <button className="btn btn-success">Yes</button>
              <button className="btn btn-default">No</button>
            </div>
          </div>
        </content>
      </div>
    )
  }
}

export default EligibilityCheck;
