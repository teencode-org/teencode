import React, {PropTypes} from 'react';

const TextField = ({ name, placeholder, otherFormGroupClasses, type, label, onChange }) => {
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
  onChange: PropTypes.func.isRequired
};

TextField.defaultProps = {
  type: 'text',
  placeholder: '',
  otherFormGroupClasses: ''
};

export default TextField;
