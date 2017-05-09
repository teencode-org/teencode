import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Resources from '../../js/components/curriculum/Resources';

describe('Resources Component', () => {
  const props = {
    title: "Resources Testing",
    notes: [
      {
        description: 'First Resource',
        href: 'http://firstink'
      },
      {
        description: 'Second Resource',
        href: 'http://secondLink'
      }
    ]
  };

  const ProjectsRender = shallow(<Resources {...props} />);

  it('displays accrate notes of the props', () => {
    const componentProps = ProjectsRender.instance().props;
    expect(componentProps.title).toEqual('Resources Testing');
    expect(componentProps.notes.length).toEqual(2);
    expect(componentProps.notes).toInclude({description: 'First Resource', href: 'http://firstink'});

    expect(ProjectsRender.find('.cur-links').find('a').length).toEqual(2);
    expect(ProjectsRender.find('.cur-links').childAt(1).text()).toEqual('Second Resource');
  });
});

