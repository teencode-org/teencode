import PropTypes from 'prop-types';
import React from 'react';

import logo from '../../../img/logo-colored.png';
import {Link, browserHistory} from 'react-router';
import TextField from '../common/form/TextField';
import Textarea from '../common/form/Textarea';
import Submit from '../common/form/Submit';


class ContactUsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonDisabled: false
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
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
          <TextField
              placeholder="Somebody Doe"
              name="name"
              label="Your name"
              onChange={this.props.onChange}
          />
          <TextField
              placeholder="somebody@email.com"
              type="email"
              name="email"
              label="Your email"
              onChange={this.props.onChange}
          />
          <Textarea
              placeholder="Type your message.."
              name="message"
              label="Message for us"
              onChange={this.props.onChange}
          />
          <Submit
              label="Send Message"
              icon="paper-plane"
              disabled={this.state.buttonDisabled}
              onClick={this.props.submitContactForm}
          />
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