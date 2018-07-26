import React from 'react';
import TestimonySection from './TestimonySection';
import VideoSection from './VideoSection';
import HowSection from './HowSection';
import SponsorSection from './SponsorSection';
import ProofArticlesSection from './ProofArticlesSection';
import EligibilityCheckCtaSection from './EligibilityCheckCtaSection';
import MainBannerSection from './MainBannerSection';
import VolunteerSection from './VolunteerSection';
import ProgressSection from './ProgressSection';

class HomePage extends React.Component {
  constructor(props, context){
    super(props);
  }

  componentDidMount() {
    // window.analytics.page();
    window.scrollTo(0, 0);
  }

  viewForm(e) {
    e.preventDefault();
    window.analytics.track('View Application Form', {
      category: 'Application'
    });
  }

  submitForm(e) {
    e.preventDefault();
    window.analytics.track('Submit', {
      category: 'Application',
      label: 'Submit Application Form'
    });
  }

  checkEligibility(e) {
    e.preventDefault();
    try {
      window.analytics.track('View Eligibility', {
        category: 'Show Interest',
        label: 'Check Requirements'
      });
    } catch (err) {
      console.log(err) // eslint-disable-line
    }
  }

  submitDetails(e) {
    e.preventDefault();
    window.analytics.track('Submit', {
      category: 'Show Interest',
      label: 'Submit Email'
    });
  }

  render() {
    return (
      <div>
        <MainBannerSection />
        <EligibilityCheckCtaSection checkEligibility={this.checkEligibility} />

        <ProofArticlesSection />

        <VolunteerSection />

        <HowSection />

        <TestimonySection />

        <ProgressSection />

        <VideoSection />

        <SponsorSection />
      </div>
    )
  }
}

export default HomePage;
