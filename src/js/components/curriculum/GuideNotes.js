import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const GuideNotes = ({session}) => {
  const defaultLink = `#session${session}`

  return (
    <div>
      <div className="guides-notes-divider" />
      <p>
        <Link to={`/curriculum/${session}/facilitator-guide/2`}>
          <i className="fa fa-chevron-right" aria-hidden="true" /> Facilitator Guide
        </Link>
      </p>
      <p>
        <Link to={`/curriculum/${session}/lesson-notes/2`}>
          <i className="fa fa-chevron-right" aria-hidden="true"/> Lesson Notes
        </Link>
      </p>
    </div>
  )
}

GuideNotes.propTypes = {
  session: PropTypes.number
}

export default GuideNotes;
