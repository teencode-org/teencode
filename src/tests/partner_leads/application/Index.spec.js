import React from 'react';
import Index from '../../../js/components/partner_leads/application/Index';

/*eslint-disable no-undef*/

describe('Partner leads application index', () => {
  const IndexRender = shallow(<Index />);

  it('renders the application component', () => {
    expect(IndexRender.find('ApplicationPage')).toExist();
  })
})