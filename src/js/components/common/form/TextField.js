import PropTypes from 'prop-types';
import React from 'react';

import ErrorMessage from './ErrorMessage';

const TextField = ({
  name,
  placeholder,
  otherFormGroupClasses,
  type,
  label,
  onChange,
  errorMessage
}) => {
  return(
    <div className={`form-group row ${otherFormGroupClasses}`}>
      <label className="col-md-4 col-sm-12 col-form-label">{label}</label>
      <div className="col-md-8 col-sm-12">
        <input
          type={type}
          className="form-control form-control-lg"
          placeholder={placeholder}
          name={name}
          onChange={onChange}
        />
        <ErrorMessage message={errorMessage} />
      </div>
    </div>
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  otherFormGroupClasses: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};

TextField.defaultProps = {
  type: 'text',
  placeholder: '',
  otherFormGroupClasses: '',
  errorMessage: null
};

export default TextField;
