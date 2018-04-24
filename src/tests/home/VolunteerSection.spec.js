import React from 'react';
import VolunteerSection from '../../js/components/home/VolunteerSection';

/*eslint-disable no-undef*/

describe('VolunteerSection', () => {
  const VolunteerRender = shallow(<VolunteerSection />);

  it('displays accurate markup', function() {
    expect(VolunteerRender.find('section').length).toEqual(1);
    expect(VolunteerRender.find('section').is('.volunteers')).toBeTruthy();
    // expect(VolunteerRender.find('.profile').text()).toInclude('Oluwadamilola Adebayo');
  });
})
