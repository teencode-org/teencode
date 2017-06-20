import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const FloatingFeedbackButton = ({sticky}) =>
  <div className="feedback-sticky" style={{ display: sticky }}>
    <Link to="/contact-us">
    <div className="share-feedback">
      <span>We'll love to hear from you</span>
      <img src={require('../../../img/chineze-face-transparent-bg.png')} />
    </div>
    </Link>
  </div>

FloatingFeedbackButton.propTypes = {
  sticky: PropTypes.string
}

export default FloatingFeedbackButton;