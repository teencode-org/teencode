import PropTypes from 'prop-types';
import React from 'react';
import logo from '../../../../img/logo-colored.png';
import TextField from '../../common/form/TextField';
import TextArea from '../../common/form/Textarea';
import Submit from '../../common/form/Submit';

class ApplicationForm extends React.Component {
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
        <div className="container">
          <form>
            <TextField
                placeholder="School"
                name="name"
                label="Name of your school"
                onChange={this.props.onChange}
            />
            <TextField
                placeholder="Email"
                type="email"
                name="email"
                label="Your email"
                onChange={this.props.onChange}
            />
            <TextField
                placeholder="Phone number"
                type="tel"
                name="phone_number"
                label="Your phone number"
                onChange={this.props.onChange}
            />
            <TextArea
                placeholder="Reason for applying"
                name="reason_for_applying"
                label="Reason for applying"
                onChange={this.props.onChange}
            />
            <Submit
                label="Apply"
                icon="pencil"
                disabled={this.state.buttonDisabled}
                onClick={this.props.submitApplication}
            />
          </form>
        </div>
      </content>
    )
  }
}

ApplicationForm.propTypes = {
  onChange: PropTypes.func,
  submitApplication: PropTypes.func
}

export default ApplicationForm;
