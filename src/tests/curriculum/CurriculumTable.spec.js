import React from 'react';
import { CurriculumTable } from '../../js/components/curriculum/CurriculumTable';
import fixtures from './fixtures';

const CurriculumTableFn = (curriculi) => {
  return shallow(
    <CurriculumTable
      getCurriculum={function() {}}
      curriculum={{curriculumList: curriculi, hasBeenFetched: true}}
    />
  );
}

describe('CurriculumTable', () => {
  describe('with on curriculum', () => {
    const curriculi = fixtures.knownCurriculum();
    const CurriculumTableRender = CurriculumTableFn(curriculi);
    const pageHeader = CurriculumTableRender.find('.page-header');
    const curList = CurriculumTableRender.instance().props.curriculum;
    const trCount = CurriculumTableRender.find('tr').length;
    const firstSession = curList.curriculumList[0];

    it('renders the index markup and child components ', function() {
      expect(pageHeader.length).toEqual(1);
      expect(pageHeader.text()).toEqual('Curriculum');
    });

    it('loads markup with the curriculumList', () => {
      expect(Object.keys(curList.curriculumList).length).toEqual(1);
      expect(trCount).toEqual(1);
      expect(Object.keys(curList)).toInclude('curriculumList');
    });

    it('displays accurate details of the curriculi', () => {
      expect(firstSession).toIncludeKeys(['title', 'description', 'objective', 'resource', 'project']);
      expect(firstSession).toInclude({title: "First Session"});

      expect(firstSession.objective.title).toEqual('At the end of the week, the students should:');
      expect(firstSession.objective.notes.length).toEqual(4);
      expect(firstSession.objective.notes[0].description).toEqual('Be excited about learning how to code.');

      expect(firstSession.description).toInclude('This is the description');

      expect(firstSession.resource.title).toEqual('Inspirational videos about CS');
      expect(firstSession.resource.notes[0].description).toEqual('Computer Science 101');
    });
  });

  describe('with multiple curriculi', () => {
    const curriculi = fixtures.randomCurriculi(5);
    const CurriculumTableRender = CurriculumTableFn(curriculi);
    const curList = CurriculumTableRender.instance().props.curriculum;
    const trCount = CurriculumTableRender.find('tr').length;

    it('displays 5 curriculum sessions', () => {
      expect(Object.keys(curList.curriculumList).length).toEqual(5);
      expect(trCount).toEqual(5);
    });
    
  });
})