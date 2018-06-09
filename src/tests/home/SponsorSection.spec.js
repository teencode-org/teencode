import React from 'react';
import SponsorSection from '../../js/components/home/SponsorSection';

/*eslint-disable no-undef*/


describe('SponsorSection', () => {
  const SponsorRender = shallow(<SponsorSection />);

  it('displays accurate markup', () => {
    expect(SponsorRender.find('section').length).toEqual(1);
    expect(SponsorRender.find('section').is('#sponsor')).toBeTruthy();
    expect(SponsorRender.find('.powered-by').text()).toEqual('#teencode is powered by');
  });
})