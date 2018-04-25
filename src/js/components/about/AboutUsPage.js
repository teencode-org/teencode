import React from 'react';
import MainBannerSection from './MainBannerSection';
import WhatWeDo from './WhatWeDo';
import WhatDrivesUs from './WhatDrivesUs';
import OurVision from './OurVision';
import Leadership from './Leadership';
import Partners from './Partners';
import SponsorSection from 'Components/home/SponsorSection';
import ProgressSection from 'Components/home/ProgressSection';

class AboutUsPage extends React.Component {
  constructor(props, context){
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    // window.analytics.page();
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
