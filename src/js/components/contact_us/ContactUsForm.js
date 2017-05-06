import React, {PropTypes} from 'react';
import logo from '../../../img/logo-colored.png';
import {Link, browserHistory} from 'react-router';

const ContactUsForm = ({ onChange, submitContactForm }) =>
  <content className="wrapper">
    <form>
      <div className="row contact-form">
        <div className="col-md-3">
            <label className="contact-form-label"> Your email </label>
        </div>
        <div className="col-md-9 space-down">
            <input onChange={onChange} name="email" type="email" className="form-control" placeholder="somebody@email.com" required/>
        </div>
        <div className="col-md-3">
            <label className="contact-form-label"> Message for us </label>
        </div>
        <div className="col-md-9">
            <textarea onChange={onChange} name="message" className="form-control" placeholder="Type your message.." required></textarea>
        </div>
      </div>
      <button onClick={submitContactForm} type="submit" className="btn btn-action pull-right contact-form-submit">Send Message <i className="fa fa-paper-plane"></i></button>
    </form>
  </content>

ContactUsForm.propTypes = {
  onChange: PropTypes.func,
  submitContactForm: PropTypes.func
}

export default ContactUsForm;