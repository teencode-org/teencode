/*global SEGMENT_KEY:true*/

import PropTypes from 'prop-types';

import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import toastr from 'toastr';

class Pages extends React.Component {
  componentWillMount() {
    toastr.options.positionClass = "toast-nav-top-right";
  }

  render () {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

Pages.propTypes = {
  children: PropTypes.object.isRequired
}

export default Pages;