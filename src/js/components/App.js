/*global SEGMENT_KEY:true*/

import React, { PropTypes } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import toastr from 'toastr';

class App extends React.Component {
  componentWillMount() {
    toastr.options.positionClass = "toast-nav-top-right";
    toastr.options.preventDuplicates = true;
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

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App;
