import React from 'react';
import FloatingFeedbackButton from '../../js/components/common/FloatingFeedbackButton';

/*eslint-disable no-undef*/

describe('<FloatingFeedbackButton />', () => {
  const wrapper = shallow(<FloatingFeedbackButton />);

  it('displays the feedback text', () => {
    expect(wrapper.find('span').text()).toEqual("We'd love to hear from you");
  });
});