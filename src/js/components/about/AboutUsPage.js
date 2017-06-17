import React from 'react';
import { Link } from 'react-router';
import MainBannerSection from './MainBannerSection';
import WhatWeDo from './WhatWeDo';
import WhatDrivesUs from './WhatDrivesUs';
import OurVision from './OurVision';
// import WhereWeAreNow from './WhereWeAreNow';
import Leadership from './Leadership';
import Partners from './Partners';
import ContactUs from '../contact_us/Index';
import SponsorSection from '../home/SponsorSection';
import ProgressSection from './../home/ProgressSection';

class AboutUsPage extends React.Component {
  constructor(props, context){
    super(props);
  }

  componentDidMount() {
    window.analytics.page();
  }

  render() {
    return (
      <div className="about-us">
        <MainBannerSection />

        <WhatWeDo />

        <WhatDrivesUs />

        <OurVision />

        <ProgressSection hideAboutUsLink={true} />

        <Leadership />

        <Partners />

        <SponsorSection />
      </div>
    )
  }
}

export default AboutUsPage;
