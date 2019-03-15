import React from 'react';
import {shallow} from 'enzyme';
import IneligibilityPage from '../../../js/components/feedback/error/Eligibility';

/*eslint-disable no-undef*/


describe('IneligbleComponent', () => {
  const IneligibilityRender = shallow(<IneligibilityPage />);

  it('renders the correct markup', () => {
    // expect(IneligibilityRender.find('.container.apply.eligibility-check')).toExist();
    expect(IneligibilityRender.find('.page-title').childAt(0).text()).toEqual("We're sorry ...");
    // expect(IneligibilityRender.find('.page-title').childAt(1).text()).toInclude("We might not be able to partner with your school in this capacity at this time.");
  });
});
