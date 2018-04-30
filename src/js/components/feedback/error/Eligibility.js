import React from 'react';
import { Link } from 'react-router';

import logo from '../../../../img/logo-colored.png';
import DocumentTitle from '../../common/DocumentTitle';


const EligibilityError = () => {
  return (
    <div className="page-title">
      <h2>We're sorry ...</h2>
      <p>We might not be able to partner with your school in this capacity at this time.</p>
      <p>
          The good news is we're working on a means to scale this offering,
        &nbsp;so <a href="https://www.facebook.com/Teencode-Africa-1345535292156762/" target="_blank">follow us on Facebook</a> and be one of the first to know when anything comes up.
      </p>
    </div>
  )
};

export default EligibilityError;