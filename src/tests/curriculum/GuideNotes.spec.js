import React from 'react';
import GuideNotes from '../../js/components/curriculum/GuideNotes';

/*eslint-disable no-undef*/

describe('GuideNotes Component', () => {
  const props = {
    session: {
      id: 1,
      lesson_notes: [{id: 1}],
      facilitator_guides: [{id: 1}]
    }
  };

  const GuideNotesRender = shallow(<GuideNotes {...props} />);

  it('displays accurate links for the session', () => {
    const componentProps = GuideNotesRender.instance().props;
    expect(componentProps.session.id).toEqual(1);
    const Links = GuideNotesRender.find('Link');

    expect(GuideNotesRender.find('.guides-notes-divider')).toBeTruthy();
    expect(Links.length).toEqual(2);
    expect(Links.nodes[0].props.children.includes(' Facilitator Guide'));
    expect(Links.nodes[1].props.children.includes(' Lesson Notes'));
  });
});

