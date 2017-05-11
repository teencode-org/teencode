import React from 'react';
import { ApplicationPageContainer } from '../../../js/components/partner_leads/application/Index';

/*eslint-disable no-undef*/

describe('Partner leads application index', () => {
  const IndexRender = shallow(<ApplicationPageContainer apply={function() {}} application={{}}/>);

  it('renders the application component', () => {
    expect(IndexRender.find('ApplicationPage')).toExist();
  })

  it('renders the accurate markup', () => {
    const parentElement = IndexRender.find('.apply');
    expect(parentElement.length).toEqual(1);
    expect(parentElement.children().length).toEqual(3);
    expect(parentElement.childAt(0).is('.header')).toBeTruthy();
    expect(parentElement.childAt(1).is('.page-title')).toBeTruthy();
    expect(parentElement.childAt(2).is('ApplicationForm')).toBeTruthy();
  });

  it('renders the correct form', () => {
    expect(IndexRender.find('ApplicationForm').length).toEqual(1);
  })
})