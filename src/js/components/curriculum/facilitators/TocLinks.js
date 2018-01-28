import PropTypes from 'prop-types';
import React from 'react';

const TocLinks = ({headings, selectedLinkIndex, onClick}) => {
  let tocLinks = [];

  for (let index in headings) {
    tocLinks.push(
      <li key={index} className="nav-item">
        <a data-target={parseInt(index) + 1} onClick={onClick} className={`nav-link ${selectedLinkIndex === parseInt(index) ? 'active' : ''}`}>
          {headings[index].innerText}
        </a>
      </li>
    );
  }

  return (
    <ul className="nav">
      {tocLinks}
    </ul>
  );
}

TocLinks.propTypes = {
  body: PropTypes.string.isRequired,
  selectedLinkIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default TocLinks;