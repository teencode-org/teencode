import React, {PropTypes} from 'react';
import facilitatorGuideList from './facilitatorGuideList'

const GuideNotes = ({session}) => {
  const sessionInfo = facilitatorGuideList.find((element) => element.id === session)
  const defaultLink = `#session${session}`

  return (
    <div>
      <div className="guides-notes-divider" />
      <p>
        <a
          target={sessionInfo && "_blank"}
          href={sessionInfo ? sessionInfo.facilitatorGuideUrl : defaultLink}
        >
        <i className="fa fa-chevron-right" aria-hidden="true"></i> Facilitator Guide
        </a>
      </p>
      <p>
        <a
          target={sessionInfo && "_blank"}
          href={sessionInfo ? sessionInfo.lessonNotesUrl : defaultLink}
        >
        <i className="fa fa-chevron-right" aria-hidden="true"></i> Lesson Notes
        </a>
      </p>
    </div>
  )
}

GuideNotes.propTypes = {
  session: PropTypes.number
}

export default GuideNotes;
