import PropTypes from 'prop-types';
import React from 'react';

const Loader = ({owner}) =>
  <div className="spinner">
    <h3 className="spinner-header">Loading {owner} ...</h3>
    <i className="fa fa-circle fa-spin spin-blue"></i>
    <i className="fa fa-circle fa-spin spin-orange"></i>
  </div>

Loader.propTypes = {
  owner: PropTypes.string
}

export default Loader;