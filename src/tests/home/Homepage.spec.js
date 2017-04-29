import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import HompageComponent from '../../js/components/home/HomePage';

const homepage = () => {
  return shallow(<HompageComponent />);
}

describe('Homepage', () => {
  const home = homepage();

  it('loads the MainBannerSection on the homepage', () => {
    expect(home.find('MainBannerSection').length).toEqual(1);
  });

  it('loads the EligibilityCheckCtaSection on the homepage', () => {
    expect(home.find('EligibilityCheckCtaSection').length).toEqual(1);
  });

  it('loads the ProofArticlesSection on the homepage', () => {
    expect(home.find('ProofArticlesSection').length).toEqual(1);
  });

  it('loads the HowSection on the homepage', () => {
    expect(home.find('HowSection').length).toEqual(1);
  });

  it('loads the TestimonySection on the homepage', () => {
    expect(home.find('TestimonySection').length).toEqual(1);
  });

  it('loads the VideoSection on the homepage', () => {
    expect(home.find('VideoSection').length).toEqual(1);
  });

  it('loads the SponsorSection on the homepage', () => {
    expect(home.find('SponsorSection').length).toEqual(1);
  });
});