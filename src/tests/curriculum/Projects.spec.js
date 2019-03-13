import React from 'react';
import {shallow } from 'enzyme';

import Projects from '../../js/components/curriculum/Projects';

/*eslint-disable no-undef*/

describe('Projects Component', () => {
  const props = {
    title: "Projects Testing",
    notes: [
      {description: 'First Expected Value'},
      {description: 'Second Expected Value'}
    ]
  };

  const ProjectsRender = shallow(<Projects {...props} />);

  it('displays accrate notes of the props', () => {
    // const componentProps = ProjectsRender.instance().props;
    // expect(componentProps.title).toEqual('Projects Testing');
    // expect(componentProps.notes.length).toEqual(2);
    // expect(componentProps.notes[1].description).toInclude('Second Expected Value');

    expect(ProjectsRender.find('p').length).toEqual(2);
    expect(ProjectsRender.childAt(2).text()).toEqual('Second Expected Value');
  });
});

