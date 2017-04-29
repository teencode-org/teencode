import React, {PropTypes} from 'react';

const Objectives = ({title, values}) =>
  <div>
    <h5 className="cur-head">Objectives</h5>
    <p>{title}</p>
    <div className="objectives">
      {values.map((value, index) =>
        <p key={index}>{value}</p>
      )}
    </div>
  </div>

Objectives.propTypes = {
  title: PropTypes.string,
  values: PropTypes.array.isRequired
}

export default Objectives;
