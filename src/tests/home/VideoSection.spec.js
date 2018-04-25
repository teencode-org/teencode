import React from 'react';
import VideoSection from '../../js/components/home/VideoSection';

/*eslint-disable no-undef*/


describe('VideoSection', () => {
  const VideoRender = shallow(<VideoSection />);

  it('displays accurate markup', function() {
    expect(VideoRender.find('section').length).toEqual(1);
    expect(VideoRender.find('section').is('.why.section')).toBeTruthy();
    // expect(VideoRender.find('.lead').text()).toInclude('gives a talk on why students should be introduced to programming.');
  });
})