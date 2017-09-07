import React, {PropTypes} from 'react';
import facilitatorGuideList from './facilitatorGuideList'

const GuideNotes = ({session}) =>
  <div>
    <p>
      <a
        target="_blank"
        href={facilitatorGuideList.find((element) => element.id === session).facilitatorGuideUrl || '#'}
      >
        Facilitator Guide
      </a>
    </p>
    <p>
      <a
        target="_blank"
        href={facilitatorGuideList.find((element) => element.id === session).lessonNotesUrl || '#'}
      >
        Lesson Notes
      </a>
    </p>
  </div>

GuideNotes.propTypes = {
  session: PropTypes.number
}

export default GuideNotes;
