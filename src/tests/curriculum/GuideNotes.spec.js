import React from 'react';
import GuideNotes from '../../js/components/curriculum/GuideNotes';

/*eslint-disable no-undef*/

describe('GuideNotes Component', () => {
  const props = {
    session: 1
  };

  const GuideNotesRender = shallow(<GuideNotes {...props} />);

  it('displays accurate links for the session', () => {
    const componentProps = GuideNotesRender.instance().props;
    expect(componentProps.session).toEqual(1);

    expect(GuideNotesRender.find('.guides-notes-divider')).toBeTruthy();
    expect(GuideNotesRender.find('a').length).toEqual(2);
    expect(GuideNotesRender.find('a').nodes[0].props.href).toEqual('#session1');
  });
});

