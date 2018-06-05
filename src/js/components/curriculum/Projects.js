import PropTypes from 'prop-types';
import React from 'react';

const Projects = ({title, notes}) =>
  <div>
    <h5 className="cur-head">{title}</h5>
    {notes.map((value, index) =>
      <p key={index}>{value.description}</p>
    )}
  </div>

Projects.propTypes = {
  title: PropTypes.string,
  notes: PropTypes.array
}

export default Projects;