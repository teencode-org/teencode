import React from 'react';
import logo from '../../../img/logo-colored.png';
import {Link, browserHistory} from 'react-router';

class ContactSuccess extends React.Component {
  render() {
    return (
      <div>
        <div className="page-title">
          <h2>Thank you for reaching out!</h2>
        </div>

        <content className="wrapper">
          <p>We have received your message successfully and will get back to you as soon as we can.</p>
          <div className="form-group row btn-row text-xs-center">
            <Link to="/" className="btn btn-action contact-form-submit">Back to home <i className="fa fa-home"></i></Link>
          </div>
        </content>
      </div>
    )
  }
}

export default ContactSuccess;
