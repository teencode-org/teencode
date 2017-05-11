import React, {PropTypes} from 'react';
import logo from '../../../img/logo-colored.png';
import { Link, browserHistory } from 'react-router';
import ContactUsForm from './ContactUsForm';
import { sendFeedback } from '../../actions/contactActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentTitle from '../common/DocumentTitle';
import toastr from 'toastr';

export class ContactUsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      message: ""
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.contact.hasBeenSent) {
      browserHistory.push('/feedback/success/contact-us')
    }
  }

  updateContactForm = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitContactForm = (event) => {
    event.preventDefault();
    event.target.value = 'Submitting ...';
    this.props.sendFeedback(this.state);
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
          buttonDisabled={this.props.contact.isSending}
        />
      </div>
    )
  }
}

ContactUsPage.propTypes = {
  sendFeedback: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    contact: state.contact
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    sendFeedback: sendFeedback
  }, dispatch)
}

export default DocumentTitle('Contact Us')(connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactUsPage));