import React from 'react';
import AboutUsPage from '../../js/components/about/AboutUsPage';

/*eslint-disable no-undef*/

const aboutUsPage = () => {
  return shallow(<AboutUsPage />);
}

describe('AboutUsPage', () => {
  const home = aboutUsPage();

  it('loads the MainBannerSection on the about page', () => {
    expect(home.find('MainBannerSection').length).toEqual(1);
  });

  it('loads the WhatWeDo section on the about page', () => {
    expect(home.find('WhatWeDo').length).toEqual(1);
  });
  
  it('loads the WhatDrivesUs section on the about page', () => {
    expect(home.find('WhatDrivesUs').length).toEqual(1);
  });
  
  it('loads the OurVision section on the about page', () => {
    expect(home.find('OurVision').length).toEqual(1);
  });
  
  it('loads the Leadership section on the about page', () => {
    expect(home.find('Leadership').length).toEqual(1);
  });
  
  it('loads the Partners on the about page', () => {
    expect(home.find('Partners').length).toEqual(1);
  });
  
  it('loads the ContactUsPage section on the about page', () => {
    expect(home.find('ContactUsPage').length).toEqual(1);
  });
  
  it('loads the SponsorSection section on the about page', () => {
    expect(home.find('SponsorSection').length).toEqual(1);
  });

});