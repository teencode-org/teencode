import React from 'react';
import {shallow} from 'enzyme';

import MainBannerSection from '../../js/components/home/MainBannerSection';

/*eslint-disable no-undef*/

const MainBannerSectionFn = () => {
  return shallow(<MainBannerSection />);
}

describe("MainBannerSection", () => {
  const MainBannerSectionRender = MainBannerSectionFn();
  it('displays accurate markup', () => {
    expect(MainBannerSectionRender.find('section').length).toEqual(1);
    expect(MainBannerSectionRender.find('section').hasClass('intro')).toBeTruthy();
    // expect(MainBannerSectionRender.find('.home-content > h1').text()).toInclude('most successful tech leaders started coding before the age of 15');
  });
})
