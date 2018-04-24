import React from 'react';
import SingleQuestion from '../../../js/components/partner_leads/eligibility_check/SingleQuestion';

/*eslint-disable no-undef*/

const SingleQuestionFn = () => {
  const criterion = {
    key: 'high_school',
    question: "Is your school a high school?",
    value: null
  }

  const setCriterion = () => {};

  return shallow(<SingleQuestion criterion={criterion} setCriterion={setCriterion} />)
}

describe('SingleQuestion Component', () => {
  const Wrapper = SingleQuestionFn();

  it('renders the single question component', () => {

    // expect(Wrapper.find('.single-question')).toExist();
    expect(Wrapper.find('.question').text()).toEqual("Is your school a high school?");
    // expect(Wrapper.find('ResponseButtons')).toExist();
  });
});