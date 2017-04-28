import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import EligibilityCheckCtaSection from '../../js/components/home/EligibilityCheckCtaSection';

const eligibilitySection = () => {
  const props = {};

  return shallow(<EligibilityCheckCtaSection {...props} />)
}

describe("EligibilityCheckCtaSection", () => {
  const eligibilityComponent = eligibilitySection();

  it("loads the EligibilityCheckCtaSection markup", () => {
    expect(eligibilityComponent.find('section.cta').length).toEqual(1);
  });

  it("loads the right CTA text", () => {
    const linkButton = eligibilityComponent.find('.btn-action');
    const linkButtonText = 'Check if your school is eligible';
    expect(eligibilityComponent.find('h3.action').text()).toEqual('High schools in Lagos can apply between 10th - 17th April, 2017 FREE');
    expect(linkButton.length).toEqual(1);
    expect(linkButton.name()).toEqual('Link');
    expect(linkButton.html()).toInclude(linkButtonText);
  });
})