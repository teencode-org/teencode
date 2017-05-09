import React from 'react';
import FloatingFeedbackButton from '../../js/components/common/FloatingFeedbackButton';

/*eslint-disable no-undef*/

describe('<FloatingFeedbackButton />', () => {
  const wrapper = shallow(<FloatingFeedbackButton />);

  it('displays the feedback text', () => {
    expect(wrapper.find('span').text()).toEqual("We'll love to hear from you");
  });
});