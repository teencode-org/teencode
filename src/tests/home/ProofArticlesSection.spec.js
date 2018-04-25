import React from 'react';
import ProofArticlesSection from '../../js/components/home/ProofArticlesSection';

/*eslint-disable no-undef*/

describe('ProofArticlesSection', () => {
  const ProofArticlesRender = shallow(<ProofArticlesSection />);

  it('displays the correct markup', function() {
    expect(ProofArticlesRender.find('section').length).toEqual(1);
    expect(ProofArticlesRender.find('section').hasClass('proof')).toBeTruthy();
    // expect(ProofArticlesRender.find('.proof').text()).toInclude('Nigeria brothers Osite and Anime');
    // expect(ProofArticlesRender.find('.proof').text()).toInclude('first African to ever win Google’s Code-in competition');
  });
});