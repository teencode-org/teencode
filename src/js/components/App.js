/*global SEGMENT_KEY:true*/

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';

import { markErrorsAsDisplayed } from '../actions/errorActions';

class App extends React.Component {
  componentWillMount() {
    toastr.options.preventDuplicates = true;
  }

  componentWillReceiveProps(nextProps) {
    let undisplayedErrors = this.getUndisplayedErrors(nextProps.errors)
    if (undisplayedErrors.length) {
      toastr.error(undisplayedErrors.join('. '));
      this.props.markErrorsAsDisplayed()
    }
  }

  getUndisplayedErrors = (errors) => {
    return errors.filter(error =>
      !error.hasBeenDisplayed
    ).map(error => {
      return error.messages
    })
  }

  render () {
    return this.props.children
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  markErrorsAsDisplayed: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    errors: Object.values(state.error)
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    markErrorsAsDisplayed
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);