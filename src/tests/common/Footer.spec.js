import React from 'react';
import Footer from '../../js/components/common/Footer';

/*eslint-disable no-undef*/

describe('Footer', () => {
  const footerRender = shallow(<Footer />);

  it('displays accurate markup', () => {
    expect(footerRender.find('footer').length).toEqual(1);
    expect(footerRender.find('.eligibility').length).toEqual(1);
    expect(footerRender.find('.vision').length).toEqual(1);
    expect(footerRender.find('.feedback').length).toEqual(1);
    expect(footerRender.find('.copyright').length).toEqual(1);
    expect(footerRender.find('.socials').length).toEqual(1);
    expect(footerRender.find('.policy').length).toEqual(1);
    expect(footerRender.find('.sitemap').length).toEqual(1);
  });
})