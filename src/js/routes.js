import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import ApplicationPage from './components/partner_leads/application/Index';
import EligibilityCheck from './components/partner_leads/eligibility_check/Index';
import PartnerLeadsPage from './components/partner_leads/Index';

export default (
  <Route>
    <Route path="/" component={App} >
      <IndexRoute component={HomePage} />
    </Route>

    <Route path="/partner_leads" component={PartnerLeadsPage} >
      <Route path="apply" component={ApplicationPage} />
      <Route path="check_eligibility" component={EligibilityCheck} />
    </Route>
  </Route>
)
