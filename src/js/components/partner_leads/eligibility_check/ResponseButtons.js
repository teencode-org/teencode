import PropTypes from 'prop-types';
import React from 'react';


const ResponseButtons = ({criterion, setCriterion}) => {

  let affirmative = () => setCriterion(Object.assign(criterion, {value: true}));
  let negative = () => setCriterion(Object.assign(criterion, {value: false}));
  let successActive = criterion.value ? 'success' : 'default';
  let negativeActive = criterion.value == false ? 'danger' : 'default';

  return (
    <div className="response">
      <button
        className={`btn btn-lg btn-${successActive}`}
        onClick={affirmative}>
        Yes
      </button>
      <button
        className={`btn btn-lg btn-${negativeActive}`}
        onClick={negative}>
        No
      </button>
    </div>
  )
};

ResponseButtons.propTypes = {
  criterion: PropTypes.object.isRequired,
  setCriterion: PropTypes.func
};

export default ResponseButtons;