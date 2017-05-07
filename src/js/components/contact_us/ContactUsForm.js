import React, {PropTypes} from 'react';
import logo from '../../../img/logo-colored.png';
import {Link, browserHistory} from 'react-router';

class ContactUsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonDisabled: false
    }
  }

  componentWillMount(nextProps) {
    this.setState({buttonDisabled: false})
  }

  componentWillReceiveProps(nextProps) {
    this.setState({buttonDisabled: nextProps.buttonDisabled})
  }

  render() {
    return (
      <content className="wrapper">
        <form>
          <div className="row contact-form">
            <div className="col-md-3">
                <label className="contact-form-label"> Your email </label>
            </div>
            <div className="col-md-9 space-down">
                <input onChange={this.props.onChange} name="email" type="email" className="form-control" placeholder="somebody@email.com" required/>
            </div>
            <div className="col-md-3">
                <label className="contact-form-label"> Message for us </label>
            </div>
            <div className="col-md-9">
                <textarea onChange={this.props.onChange} name="message" className="form-control" placeholder="Type your message.." required></textarea>
            </div>
          </div>
          <button onClick={this.props.submitContactForm} disabled={this.state.buttonDisabled} type="submit" className="btn btn-action pull-right contact-form-submit">Send Message <i className="fa fa-paper-plane"></i></button>
        </form>
      </content>
    )
  }
}

ContactUsForm.propTypes = {
  onChange: PropTypes.func,
  submitContactForm: PropTypes.func,
  buttonDisabled: PropTypes.bool
}

export default ContactUsForm;