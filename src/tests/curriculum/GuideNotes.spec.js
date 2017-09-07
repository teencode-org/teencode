import React from 'react';
import GuideNotes from '../../js/components/curriculum/GuideNotes';

/*eslint-disable no-undef*/

describe('GuideNotes Component', () => {
  const props = {
    session: 1
  };

  const facilitatorGuideList = [
    {  
      id:1,
      facilitatorGuideUrl: 'https://some-guide.com',
      lessonNotesUrl:'https://some-notes.com'
    }
  ]

  const GuideNotesRender = shallow(<GuideNotes {...props} />);

  it('displays accurate links for the session', () => {
    const componentProps = GuideNotesRender.instance().props;
    expect(componentProps.session).toEqual(1);

    expect(GuideNotesRender.find('.guides-notes-divider')).toBeTruthy();
    expect(GuideNotesRender.find('a').length).toEqual(2);
    expect(GuideNotesRender.find('a')[0].text()).toEqual('https://some-guide.com');
    expect(GuideNotesRender.find('a')[1].text()).toEqual('https://some-notes.com');
  });
});

