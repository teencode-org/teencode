import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';

const SubLinks = ({subLinks, subLinkOnClick}) =>
  <div className="dropdown-menu">
    {Object.keys(subLinks).map(key =>
      <Link
        key={key}
        to={`#${key}`}
        className="page-scroll dropdown-item"
        onClick={subLinkOnClick}
      >
        {subLinks[key]}
      </Link>
    )}
  </div>

SubLinks.propTypes = {
  subLinks: PropTypes.object.isRequired,
  subLinkOnClick: PropTypes.func.isRequired
}

export default SubLinks;