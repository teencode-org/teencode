import PropTypes from 'prop-types';
import React from 'react';


const Submit = ({ label, icon, otherFormGroupClasses, onClick, disabled }) => {
  if (icon) {
    icon = <i className={`fa fa-${icon}`}></i>
  }
  return(
    <div className={`form-group row ${otherFormGroupClasses}`}>
      <div className="col-sm-12">
        <button
          type="submit"
          className="btn btn-action pull-right form-submit"
          onClick={onClick}
          disabled={disabled}
        >
          {label} {icon}
        </button>
      </div>
    </div>
  );
};

Submit.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  otherFormGroupClasses: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

Submit.defaultProps = {
  otherFormGroupClasses: ''
};

export default Submit;