import React, {PropTypes} from 'react';

const Projects = ({title, values}) =>
  <div>
    <h5 className="cur-head">{title}</h5>
    {values.map((value, index) =>
      <p key={index}>{value}</p>
    )}
  </div>

Projects.propTypes = {
  title: PropTypes.string,
  values: PropTypes.array
}

export default Projects;
