import React from 'react';
import Resources from '../../js/components/curriculum/Resources';

/*eslint-disable no-undef*/

describe('Resources Component', () => {
  const props = {
    title: "Resources Testing",
    values: [
      {
        name: 'First Resource',
        href: 'http://firstink'
      },
      {
        name: 'Second Resource',
        href: 'http://secondLink'
      }
    ]
  };

  const ProjectsRender = shallow(<Resources {...props} />);

  it('displays accrate values of the props', () => {
    const componentProps = ProjectsRender.instance().props;
    expect(componentProps.title).toEqual('Resources Testing');
    expect(componentProps.values.length).toEqual(2);
    expect(componentProps.values).toInclude({name: 'First Resource', href: 'http://firstink'});

    expect(ProjectsRender.find('.cur-links').find('a').length).toEqual(2);
    expect(ProjectsRender.find('.cur-links').childAt(1).text()).toEqual('Second Resource');
  });
});

