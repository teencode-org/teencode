import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Index from '../../../js/components/partner_leads/application/Index';

describe('Partner leads application index', () => {
  const IndexRender = shallow(<Index />);

  it('renders the application component', () => {
    expect(IndexRender.find('ApplicationPage')).toExist();
  })
})