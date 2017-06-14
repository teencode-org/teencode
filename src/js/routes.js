import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Pages from './components/Pages';
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
import ContactUs from './components/contact_us/Index';
import NotFound from './components/not_found/notFound';
import Blog from './components/blog';
import AboutUsPage from './components/about/AboutUsPage';

const redirectIfFlagIsDisabled = (flag, nextState, replace) => {
  if (flag) return;
  replace('/');
};

const redirectIfPageNotFound = (nextState, replace) => {
  replace('/not-found');
}

export default (
  <Route component={App}>
    <Route path="/" component={Pages} >
      <IndexRoute component={HomePage} />
      <Route path="curriculum"
             onEnter={redirectIfFlagIsDisabled.bind(null, flagChecks.curriculumIsEnabled())}
             component={CurriculumPage} />
      <Route path="contact-us"
             component={ContactUs}
             onEnter={redirectIfFlagIsDisabled.bind(null, flagChecks.contactUsIsEnabled())} />
      <Route path="/blog" component={Blog} />
      <Route path="/not-found" component={NotFound} />
      <Route path="about-us"
             component={AboutUsPage} onEnter={redirectIfFlagIsDisabled.bind(null, flagChecks.aboutUsIsEnabled())} />
    </Route>
    <Route path="/not-found" component={NotFound} />


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
