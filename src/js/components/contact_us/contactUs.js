import React from 'react';
import logo from '../../../img/logo-colored.png';
import {Link, browserHistory} from 'react-router';

class ContactUs extends React.Component {
  state = {
    email: "",
    message: ""
  }

  render() {
    let key = 0;
    return (
      <div className="container eligibility-check">
        <div className="header">
          <img src={logo} />
          <Link to="/">
            <i className="fa fa-window-close" aria-hidden="true" />
          </Link>
        </div>

        <div className="page-title">
          <h2>We'll love to hear from you</h2>
          <h5>Please send us a message :)</h5>
        </div>

        <content className="wrapper">
          <form>
            <div className="row contact-form">
              <div className="col-md-3">
                  <label className="contact-form-label"> Your email </label>
              </div>
              <div className="col-md-9 space-down">
                  <input type="email" className="form-control" placeholder="somebody@email.com" required/>
              </div>
              <div className="col-md-3">
                  <label className="contact-form-label"> Message for us </label>
              </div>
              <div className="col-md-9">
                  <textarea className="form-control" placeholder="Type your message.." required></textarea>
              </div>
            </div>
            <button type="submit" className="btn btn-action pull-right contact-form-submit">Send Message <i className="fa fa-paper-plane"></i></button>
          </form>
        </content>
      </div>
    )
  }
}

export default ContactUs;
