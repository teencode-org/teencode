import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import CurriculumBody from '../../js/components/curriculum/CurriculumBody';
import fixtures from './fixtures';

const CurriculumBodyFn = (curriculi) => {
  return shallow(<CurriculumBody curriculumList={curriculi} />);
}

describe('CurriculumBody', () => {
  describe('with on curriculum', () => {
    const curriculi = fixtures.knownCurriculum();
    const CurriculumBodyRender = CurriculumBodyFn(curriculi);
    const curList = CurriculumBodyRender.instance().props;
    const trCount = CurriculumBodyRender.find('tr').length;
    const sessionList = Object.keys(curList.curriculumList);
    const firstSession = curList.curriculumList.firstSession;

    it('loads markup with the curriculumList', () => {
      expect(Object.keys(curList).length).toEqual(1);
      expect(trCount).toEqual(2);
      expect(Object.keys(curList)).toInclude('curriculumList');
      expect(sessionList).toInclude('firstSession');
    });

    it('displays accurate details of the curriculi', () => {
      expect(firstSession).toIncludeKeys(['title', 'description', 'objectives', 'resources', 'projects']);
      expect(firstSession).toInclude({title: "First Session"});

      expect(firstSession.objectives.title).toEqual('At the end of the week, the students should:');
      expect(firstSession.objectives.values.length).toEqual(4);
      expect(firstSession.objectives.values[0]).toEqual('Be excited about learning how to code.');

      expect(firstSession.description).toInclude('This is the description');

      expect(firstSession.resources.title).toEqual('Inspirational videos about CS');
      expect(firstSession.resources.values[0].name).toEqual('Computer Science 101');
    });
  });

  describe('with multiple curriculi', () => {
    const curriculi = fixtures.randomCurriculi(5);
    const CurriculumBodyRender = CurriculumBodyFn(curriculi);
    const curList = CurriculumBodyRender.instance().props;
    const trCount = CurriculumBodyRender.find('tr').length;
    const sessionList = Object.keys(curList.curriculumList);

    it('displays 2 curriculum sessions', () => {
      expect(Object.keys(sessionList).length).toEqual(5);
      expect(trCount).toEqual(2);
    });
    
  });
})