import React from 'react';
import { Link } from 'react-router';
import MainBannerSection from './MainBannerSection';
import WhatWeDo from './WhatWeDo';
import WhatDrivesUs from './WhatDrivesUs';
import OurVision from './OurVision';
// import WhereWeAreNow from './WhereWeAreNow';
import Leadership from './Leadership';
// import Partners from './Partners';
import ContactUsPage from '../contact_us/';
import SponsorSection from '../home/SponsorSection';
import Partners from './Partners';

class AboutUsPage extends React.Component {
  constructor(props, context){
    super(props);
  }

  componentDidMount() {
    window.analytics.page();
  }

  render() {
    return (
      <div>
        <MainBannerSection />

        <WhatWeDo />

        <WhatDrivesUs />

        <OurVision />

        <Leadership />

        <Partners />

        <ContactUsPage />

        <SponsorSection />
      </div>
    )
  }
}

export default AboutUsPage;
