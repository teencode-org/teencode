import React, {PropTypes} from 'react';

const Resources = ({title, values}) =>
  <div>
    <h5 className="cur-head">{title}</h5>
    <div className="cur-links">
      {values.map((value, index) =>
        <a key={index} target="_blank" href={value.href}>{value.name}</a>
      )}
    </div>
  </div>

Resources.propTypes = {
  title: PropTypes.string,
  values: PropTypes.array
}

export default Resources;
