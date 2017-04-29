import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { CurriculumPage } from '../../js/components/curriculum/Index';

describe("CurriculumPage", () => {
  const CurriculumPageRender = shallow(<CurriculumPage />);

  it('renders the index markup and child components ', function() {
    
    const sectionElement = CurriculumPageRender.find('section');
    const curriculumBody = CurriculumPageRender.find('CurriculumBody');
    const pageHeader = CurriculumPageRender.find('.page-header');

    expect(sectionElement.length).toEqual(1);
    expect(sectionElement.is('.curriculum.page')).toBeTruthy();
    expect(curriculumBody.length).toEqual(1);
    expect(pageHeader.length).toEqual(1);
    expect(pageHeader.text()).toEqual('Curriculum');
  });
})