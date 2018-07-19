import PropTypes from 'prop-types';
import React from 'react';

const SelectField = ({ name, placeholder, otherFormGroupClasses, label, onChange, options }) => {
  return(
    <div className={`form-group row ${otherFormGroupClasses}`}>
      <label className="col-md-4 col-sm-12 col-form-label">{label}</label>
      <div className="col-md-8 col-sm-12">
        <select className='form-control form-control-lg' name={name} onChange={onChange}>
        <option value={''}>{placeholder}</option>
         {options.map(element => {
            return <option value={element}>{element}</option>
          })}
        </select>
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
  options: PropTypes.array.isRequired
};

SelectField.defaultProps = {
  placeholder: '',
  otherFormGroupClasses: ''
};

export default SelectField;
