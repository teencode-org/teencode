import React from 'react';
import ApplicationPage from '../../../js/components/partner_leads/application/ApplicationPage';

/*eslint-disable no-undef*/

const ApplicationPageFn = () => {
  const onChange = () => {

  }

  const submitApplication = () => {

  }

  return shallow(<ApplicationPage onChange={onChange} onClick={submitApplication} />);
}

describe('ApplicationPage', () => {
  const ApplicationPageRender = ApplicationPageFn();

  it('renders the accurate markup', () => {
    const parentElement = ApplicationPageRender.find('.container.eligibility-check.apply');
    expect(parentElement.length).toEqual(1);
    expect(parentElement.children().length).toEqual(3);
    expect(parentElement.childAt(0).is('.header')).toBeTruthy();
    expect(parentElement.childAt(1).is('.page-title')).toBeTruthy();
    expect(parentElement.childAt(2).is('content')).toBeTruthy();
  });

  it('renders the correct form', () => {
    const formContainer = ApplicationPageRender.find('.wrapper').find('.container');
    const applicationForm = formContainer.childAt(0);
    expect(formContainer.find('form').length).toEqual(1);
    expect(applicationForm.is('form')).toBeTruthy();
    expect(applicationForm.find('input').length).toEqual(3);
    expect(applicationForm.find('input#message')).toExist();
    expect(applicationForm.find('input#email')).toExist();
    expect(applicationForm.find('input#phone_number')).toExist();

    expect(applicationForm.find('button.btn.btn-action')).toExist();
  })
});