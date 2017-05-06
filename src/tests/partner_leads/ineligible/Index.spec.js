import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Index from '../../../js/components/partner_leads/ineligible/Index';

describe('IneligbleComponent', () => {
  const IndexRender = shallow(<Index />);

  it('renders the correct markup', () => {
    expect(IndexRender.find('.container.apply.eligibility-check')).toExist();
    expect(IndexRender.find('.page-title').childAt(0).text()).toEqual("We're sorry ...");
    expect(IndexRender.find('.page-title').childAt(1).text()).toInclude("We might not be able to partner with your school in this capacity at this time.");
  });
});