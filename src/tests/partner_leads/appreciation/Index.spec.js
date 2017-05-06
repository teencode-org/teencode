import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Index from '../../../js/components/partner_leads/appreciation/Index';

describe("AppreciationPage", () => {
  const AppreciationPageRender = shallow(<Index />);

  it('renders the right markup', () => {
    expect(AppreciationPageRender.find('.container.apply.eligibility-check')).toExist();
    expect(AppreciationPageRender.find('.page-title h2').text()).toEqual("We've received your application!");
    expect(AppreciationPageRender.find('.page-title p').text()).toInclude("We will be reaching out shortly by sending you an email or a text message.");
  });
})