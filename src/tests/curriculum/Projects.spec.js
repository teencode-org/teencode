import React from 'react';
import Projects from '../../js/components/curriculum/Projects';

/*eslint-disable no-undef*/

describe('Projects Component', () => {
  const props = {
    title: "Projects Testing",
    values: [
      'First Expected Value',
      'Second Expected Value'
    ]
  };

  const ProjectsRender = shallow(<Projects {...props} />);

  it('displays accrate values of the props', () => {
    const componentProps = ProjectsRender.instance().props;
    expect(componentProps.title).toEqual('Projects Testing');
    expect(componentProps.values.length).toEqual(2);
    expect(componentProps.values).toInclude('Second Expected Value');

    expect(ProjectsRender.find('p').length).toEqual(2);
    expect(ProjectsRender.childAt(2).text()).toEqual('Second Expected Value');
  });
});

