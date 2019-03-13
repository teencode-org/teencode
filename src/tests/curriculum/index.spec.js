import React from 'react';
import {shallow } from 'enzyme';

import { CurriculumPageContainer } from '../../js/components/curriculum/Index';

/*eslint-disable no-undef*/

describe("CurriculumPage", () => {
  const CurriculumPageRender = shallow(<CurriculumPageContainer />);

  it('renders the index markup and child components ', () => {
    const sectionElement = CurriculumPageRender.find('section');

    expect(sectionElement.length).toEqual(1);
    expect(sectionElement.is('.curriculum.page')).toBeTruthy();
  });
})
