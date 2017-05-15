import React from 'react';
import EligibilityCheckCtaSection from '../../js/components/home/EligibilityCheckCtaSection';

/*eslint-disable no-undef*/

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
    expect(eligibilityComponent.find('h3.action').text()).toEqual('High Schools in Lagos and Nairobi can apply to partner with us FREE');
    expect(linkButton.length).toEqual(1);
    expect(linkButton.name()).toEqual('Link');
    expect(linkButton.html()).toInclude(linkButtonText);
  });
})