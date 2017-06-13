import React from 'react';
import AboutUsPage from '../../js/components/about/AboutUsPage';

/*eslint-disable no-undef*/

const aboutUsPage = () => {
  return shallow(<AboutUsPage />);
}

describe('AboutUsPage', () => {
  const about = aboutUsPage();

  it('loads the MainBannerSection on the about page', () => {
    expect(about.find('MainBannerSection').length).toEqual(1);
  });

  it('loads the WhatWeDo section on the about page', () => {
    expect(about.find('WhatWeDo').length).toEqual(1);
  });
  
  it('loads the WhatDrivesUs section on the about page', () => {
    expect(about.find('WhatDrivesUs').length).toEqual(1);
  });
  
  it('loads the OurVision section on the about page', () => {
    expect(about.find('OurVision').length).toEqual(1);
  });
  
  it('loads the Leadership section on the about page', () => {
    expect(about.find('Leadership').length).toEqual(1);
  });
  
  it('loads the Partners on the about page', () => {
    expect(about.find('Partners').length).toEqual(1);
  });
  
  // it('loads the ContactUsPage section on the about page', () => {
  //   expect(about.find('ContactUsPage').length).toEqual(1);
  // });
  
  it('loads the SponsorSection section on the about page', () => {
    expect(about.find('SponsorSection').length).toEqual(1);
  });

});