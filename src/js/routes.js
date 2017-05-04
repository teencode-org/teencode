import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import CurriculumPage from './components/curriculum/Index';
import ApplicationPage from './components/partner_leads/application/Index';
import IneligiblePage from './components/partner_leads/ineligible/Index';
import AppreciationPage from './components/partner_leads/appreciation/Index';
import EligibilityCheck from './components/partner_leads/eligibility_check/Index';
import PartnerLeadsPage from './components/partner_leads/Index';
import ContactUsPage from './components/contact_us/contactUs';
import * as flagChecks from './utils/featureFlagChecks';

const redirectIfFlagIsDisabled = (flag, nextState, replaceState) => {
  if (flag) return;
  replaceState('/');
};

export default (
  <Route>
    <Route path="/" component={App} >
      <IndexRoute component={HomePage} />
      <Route path="curriculum"
             onEnter={redirectIfFlagIsDisabled.bind(null, flagChecks.curriculumIsEnabled())}
             component={CurriculumPage} />
    </Route>

    <Route path="contact-us"
           component={ContactUsPage}
           onEnter={redirectIfFlagIsDisabled.bind(null, flagChecks.contactUsIsEnabled())} />

    <Route path="/partner-leads" component={PartnerLeadsPage} >
      <Route path="apply" component={ApplicationPage} />
      <Route path="thank-you" component={AppreciationPage} />
      <Route path="check-eligibility" component={EligibilityCheck} />
      <Route path="ineligible" component={IneligiblePage} />
    </Route>
  </Route>
)
