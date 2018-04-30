import React from 'react';
import TestimonySection from '../../js/components/home/TestimonySection';

/*eslint-disable no-undef*/


describe('TestimonySection', () => {
  const TestimonyRender = shallow(<TestimonySection />);

  it('displays accurate markup', () => {
    expect(TestimonyRender.find('section').length).toEqual(1);
    expect(TestimonyRender.find('section').is('.testimony')).toBeTruthy();
    // expect(TestimonyRender.find('.intro-text').text()).toInclude('It was challenging, fun and inspirational. Now I know I can be an IT expert.');
  });
})