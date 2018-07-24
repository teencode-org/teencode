import PropTypes from 'prop-types';
import React from 'react';

import ErrorMessage from './ErrorMessage';

const SelectField = ({
  name,
  placeholder,
  otherFormGroupClasses,
  label,
  onChange,
  options,
  errorMessage
}) => {
  return(
    <div className={`form-group row ${otherFormGroupClasses}`}>
      <label className="col-md-4 col-sm-12 col-form-label">{label}</label>
      <div className="col-md-8 col-sm-12">
        <select className="form-control form-control-lg" name={name} onChange={onChange}>
          <option value={''}>{placeholder}</option>
          {
            options.map(({ label, value, isDisabled }) => {
              return <option key={value} value={value} disabled={isDisabled}>{label}</option>
            })
          }
        </select>
        <ErrorMessage message={errorMessage}/>
      </div>
    </div>
  );
};

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  otherFormGroupClasses: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired
  })).isRequired,
  errorMessage: PropTypes.string
};

SelectField.defaultProps = {
  placeholder: '',
  otherFormGroupClasses: '',
  errorMessage: null
};

export default SelectField;
