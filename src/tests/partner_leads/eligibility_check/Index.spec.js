import React from 'react';
import Index from '../../../js/components/partner_leads/eligibility_check/Index';

/*eslint-disable no-undef*/

describe('Eligibility Check Index', () => {
  const IndexWrapper = mount(<Index />);

  it('renders the accurate Component', () => {

    const smallElement = IndexWrapper.find('.page-title');
    // expect(IndexWrapper.find('.container.eligibility-check')).toExist();
    expect(smallElement.childAt(1).is('small')).toBeTruthy();
    expect(smallElement.childAt(1).text()).toEqual('For Schools');
    expect(smallElement.childAt(0).is('h2')).toBeTruthy();
    expect(smallElement.childAt(0).text()).toEqual('Eligibility Check');
    expect(IndexWrapper.find('SingleQuestion').length).toEqual(3);
  });
  
});
