import React from 'react';
import {shallow } from 'enzyme';

import Objectives from '../../js/components/curriculum/Objectives';

/*eslint-disable no-undef*/

describe('Objectives Component', () => {
  const props = {
    title: "Objectives Testing",
    notes: [
      {description: 'First Expected Value'},
      {description: 'Second Expected Value'}
    ]
  };

  const ObjectivesRender = shallow(<Objectives {...props} />);

  it('displays accurate notes of the props', () => {
    // const componentProps = ObjectivesRender.instance().props;
    // expect(componentProps.title).toEqual('Objectives Testing');
    // expect(componentProps.notes.length).toEqual(2);
    // expect(componentProps.notes[1].description).toInclude('Second Expected Value');

    expect(ObjectivesRender.find('.objectives').find('p').length).toEqual(2);
    expect(ObjectivesRender.find('.objectives').childAt(1).text()).toEqual('Second Expected Value');
  });
});

