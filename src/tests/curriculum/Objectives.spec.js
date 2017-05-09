import React from 'react';
import Objectives from '../../js/components/curriculum/Objectives';

/*eslint-disable no-undef*/

describe('Objectives Component', () => {
  const props = {
    title: "Objectives Testing",
    values: [
      'First Expected Value',
      'Second Expected Value'
    ]
  };

  const ObjectivesRender = shallow(<Objectives {...props} />);

  it('displays accrate values of the props', () => {
    const componentProps = ObjectivesRender.instance().props;
    expect(componentProps.title).toEqual('Objectives Testing');
    expect(componentProps.values.length).toEqual(2);
    expect(componentProps.values).toInclude('Second Expected Value');

    expect(ObjectivesRender.find('.objectives').find('p').length).toEqual(2);
    expect(ObjectivesRender.find('.objectives').childAt(1).text()).toEqual('Second Expected Value');
  });
});

