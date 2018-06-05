import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';

const GuideNotes = ({session}) => {
  const defaultLink = `#session${session}`
  const {facilitator_guides, lesson_notes} = session
  return (
    <div>
      <div className="guides-notes-divider" />
      {facilitator_guides &&
        <p>
          <Link to={`/curriculum/${session.id}/facilitator-guide/${facilitator_guides[0].id}`}>
            <i className="fa fa-chevron-right" aria-hidden="true" /> Facilitator Guide
          </Link>
        </p>
      }
      {lesson_notes &&
        <p>
          <Link to={`/curriculum/${session.id}/lesson-notes/${lesson_notes[0].id}`}>
            <i className="fa fa-chevron-right" aria-hidden="true"/> Lesson Notes
          </Link>
        </p>
      }
    </div>
  )
}

GuideNotes.propTypes = {
  session: PropTypes.object
}

export default GuideNotes;