import React, { PropTypes } from 'react';

const EmptyPage = ({message}) =>
  <div className="empty-page">
    <p className="message">{message}</p>
  </div>

EmptyPage.propTypes = {
  message: PropTypes.string
}

export default EmptyPage;

