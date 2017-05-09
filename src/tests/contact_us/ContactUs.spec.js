import React from 'react';
import { mount, shallow } from 'enzyme';
import expect from 'expect';
import { ContactUsPage } from '../../js/components/contact_us/Index';
import ContactUsForm from '../../js/components/contact_us/ContactUsForm';

const ContactUs = () => {
  return shallow(<ContactUsPage sendFeedback={function() {}} contact={{email: ''}}/>);
}

const ContactForm = () => {
  return shallow(<ContactUsForm />);
}

describe('ContactUs', function () {
  const ContactUsWrapper = ContactUs();
  const ContactFormWrapper = ContactForm();

  it('should render the page title', () => {
    expect(ContactUsWrapper.find('.page-title').childAt(0).text()).toEqual("We'll love to hear from you");
  });

  it('should render the sub title', () => {
    expect(ContactUsWrapper.find('.page-title h5').text()).toEqual('Please send us a message :)');
  });

  it('should render the contact us form', () => {
    expect(ContactUsWrapper.find('ContactUsForm').length).toEqual(1);
  });

  it('should render the email textbox', () => {
    expect(ContactFormWrapper.find('input[name="email"]').length).toEqual(1);
  });

  it('should render the textarea', () => {
    expect(ContactFormWrapper.find('textarea[name="message"]').length).toEqual(1);
  });
});
