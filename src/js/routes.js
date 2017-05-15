import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import CurriculumPage from './components/curriculum/Index';
import ApplicationPage from './components/partner_leads/application/Index';
import EligibilityErrorPage from './components/feedback/error/Eligibility';
import ApplicationSuccessPage from './components/feedback/success/Application';
import EligibilityCheck from './components/partner_leads/eligibility_check/Index';
import * as flagChecks from './utils/featureFlagChecks';
import PartnerLeads from './components/partner_leads/Index';
import ContactUsSuccessPage from './components/feedback/success/ContactUs';
import Feedback from './components/feedback/Index';
import ContactUsPage from './components/contact_us/Index';
import NotFound from './components/not_found/notFound';

const redirectIfFlagIsDisabled = (flag, nextState, replace) => {
  console.log(flag, "flag");
  if (flag) return;
  replace('/');
};

const redirectIfPageNotFound = (nextState, replace) => {
  replace('/not-found');
}

export default (
  <Route>
    <Route path="/" component={App} >
      <IndexRoute component={HomePage} />
      <Route path="curriculum"
             onEnter={redirectIfFlagIsDisabled.bind(null, flagChecks.curriculumIsEnabled())}
             component={CurriculumPage} />
      <Route path="contact-us"
             component={ContactUsPage}
             onEnter={redirectIfFlagIsDisabled.bind(null, flagChecks.contactUsIsEnabled())} />
      <Route path="/not-found" component={NotFound} />
    </Route>

    
    // TODO: Create template for feedback and pass in custom messages
    <Route path="/feedback" component={Feedback} >
      <Route path="success/application" component={ApplicationSuccessPage} />
      <Route
        path="success/contact-us"
        onEnter={redirectIfFlagIsDisabled.bind(null, flagChecks.curriculumIsEnabled())}
        component={ContactUsSuccessPage} />
      <Route path="error/ineligible" component={EligibilityErrorPage} />
    </Route>

    <Route path="/partner-leads" component={PartnerLeads} >
      <Route path="apply" component={ApplicationPage} />
      <Route path="check-eligibility" component={EligibilityCheck} />
    </Route>

    <Route path="*" onEnter={redirectIfPageNotFound} />
  </Route>
)
