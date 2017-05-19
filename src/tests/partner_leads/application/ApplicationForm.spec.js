import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import ApplicationForm from '../../../js/components/partner_leads/application/ApplicationForm';

const ApplicationPageFn = () => {
  const onChange = () => {}
  const submitApplication = () => {}

  return shallow(<ApplicationForm onChange={onChange} submitApplication={submitApplication} />);
}

describe('Application Form', () => {
  const ApplicationFormRender = ApplicationPageFn();

  it('renders the correct form', () => {
    const applicationForm = ApplicationFormRender.find('form');
    expect(applicationForm.length).toEqual(1);
    expect(applicationForm.is('form')).toBeTruthy();
    expect(applicationForm.find('TextField').length).toEqual(3);
    expect(applicationForm.find('TextField').find('input[name="name"]')).toExist();
    expect(applicationForm.find('TextField').find('input[name="email"]')).toExist();
    expect(applicationForm.find('TextField').find('input[name="phone_number"]')).toExist();
    expect(applicationForm.find('Submit')).toExist();
  })
});