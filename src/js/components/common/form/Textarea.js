import PropTypes from 'prop-types';
import React from 'react';

const Textarea = ({ name, placeholder, otherFormGroupClasses, label, onChange }) => {
  return(
    <div className={`form-group row ${otherFormGroupClasses}`}>
      <label className="col-md-4 col-sm-12 col-form-label">{label}</label>
      <div className="col-md-8 col-sm-12">
        <textarea
          className="form-control form-control-lg"
          placeholder={placeholder}
          name={name}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  otherFormGroupClasses: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

Textarea.defaultProps = {
  placeholder: '',
  otherFormGroupClasses: ''
};

export default Textarea;