import React from 'react';
import logo from '../../../img/logo-colored.png';
import {Link, browserHistory} from 'react-router';

class ContactUs extends React.Component {
  render() {
    return (
      <div className="container page-index">
        <div className="header">
          <img src={logo} />
          <Link to="/">
            <i className="fa fa-window-close" aria-hidden="true" />
          </Link>
        </div>

        {this.props.children}
      </div>
    )
  }
}

export default ContactUs;
