import React, {PropTypes} from 'react';

const Resources = ({title, notes}) =>
  <div>
    <h5 className="cur-head">{title}</h5>
    <div className="cur-links">
      {notes.map((value, index) =>
        <a key={index} target="_blank" href={value.link}>{value.description}</a>
      )}
    </div>
  </div>

Resources.propTypes = {
  title: PropTypes.string,
  notes: PropTypes.array
}

export default Resources;
