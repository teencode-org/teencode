import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { CurriculumPageContainer } from '../../js/components/curriculum/Index';

describe("CurriculumPage", () => {
  const CurriculumPageRender = shallow(<CurriculumPageContainer />);

  it('renders the index markup and child components ', function() {
    
    const sectionElement = CurriculumPageRender.find('section');
    const CurriculumTable = CurriculumPageRender.find('CurriculumTable');

    expect(sectionElement.length).toEqual(1);
    expect(sectionElement.is('.curriculum.page')).toBeTruthy();
    expect(CurriculumTable.length).toEqual(1);
  });
})