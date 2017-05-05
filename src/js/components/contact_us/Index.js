import React from 'react';
import logo from '../../../img/logo-colored.png';
import {Link, browserHistory} from 'react-router';
import ContactUsForm from './ContactUsForm';
import {contact} from '../../actions/contactActions';
import DocumentTitle from '../common/DocumentTitle';
import toastr from 'toastr';

class ContactUsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      message: ""
    }
  }

  updateContactForm = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  sendContact = (event, state) => {
    contact(state)
      .then(data => {
        browserHistory.push('/feedback/success/contact-us');
      })
      .catch(err => {
        event.target.disabled = false;
        toastr.error(err);
      });
  }

  submitContactForm = (event) => {
    event.preventDefault();
    event.target.value = 'Submitting ...';
    event.target.disabled = true;
    event.persist()
    this.sendContact(event, this.state)
  }

  render() {
    return (
      <div className="container page-index">
        <div className="page-title">
          <h2>We'll love to hear from you</h2>
          <h5>Please send us a message :)</h5>
        </div>

        <ContactUsForm
          onChange={this.updateContactForm}
          submitContactForm={this.submitContactForm}
        />
      </div>
    )
  }
}

export default DocumentTitle('Contact Us')(ContactUsPage);