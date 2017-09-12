import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const FloatingFeedbackButton = ({sticky}) =>
  <div className="feedback-sticky" style={{ display: sticky }}>
    <Link to="/contact-us">
    <div className="share-feedback">
      <span>We would love to hear from you</span>
      <img src="https://farm5.staticflickr.com/4381/36334242954_65c19f0af9_m.jpg" />
    </div>
    </Link>
  </div>

FloatingFeedbackButton.propTypes = {
  sticky: PropTypes.string
}

export default FloatingFeedbackButton;
