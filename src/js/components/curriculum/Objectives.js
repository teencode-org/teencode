import PropTypes from 'prop-types';
import React from 'react';


const Objectives = ({title, notes}) =>
  <div>
    <h5 className="cur-head">Objectives</h5>
    <p>{title}</p>
    <div className="objectives">
      {notes.map((value, index) =>
        <p key={index}>{value.description}</p>
      )}
    </div>
  </div>

Objectives.propTypes = {
  title: PropTypes.string,
  notes: PropTypes.array.isRequired
}

export default Objectives;