import React from 'react';
import { browserHistory } from 'react-router';
import ApplicationForm from './ApplicationForm';
import { bindActionCreators } from '../../../../node_modules/redux';
import DocumentTitle from '../common/DocumentTitle';
import { connect } from 'react-redux';
import { summerClubApplication } from '../../actions/summerClubActions';
import Validator from '../../utils/validator';

class SummerClub extends React.Component {
  constructor() {
    super();

    this.state = {
        formErrors: {},
        parent_name: '',
        parent_email: '',
        parent_phone_number: '',
        center: '',
        student_one_name: '',
        student_one_level: '',
        student_two_name: '',
        student_two_level: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.summerClub.hasBeenSent) {
      browserHistory.push('/summer-club/success')
    }
  }

  handleInput = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  validateFormData = ({parent, children}) => {
    const errors = {};

    const validator = new Validator(parent);
    const {
      email,
      center,
      phone_number,
      name
    } = parent

    if (!validator.validateEmail(email)) {
      errors.email = "Please enter a valid email address"
    }

    if (center === "") {
      errors.center = "Please choose a center close to you"
    }

    if (name === "" || name.indexOf(' ') == -1) {
      errors.name = "Please enter your full name"
    }

    if (isNaN(phone_number) || phone_number.length !== 11) {
      errors.phone_number = "Please enter a valid phone number"
    }

    if (children.length === 0) {
      errors.children = "Please enter all the details of your ward(s)"
    }

    return {
      errors,
      valid: Object.keys(errors).length == 0
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    event.target.value = 'Submiting';
    const params = {parent: this.parentParams(), children: this.childrenParams()}

    const {
      valid,
      errors
    } = this.validateFormData(params);

    if(valid) {
      this.props.summerClubApplication(params);
    } else {
      this.setState({
        formErrors: errors
      })
    }
  }

  childrenParams = () => {
    return [
      {
        name: this.state.student_one_name,
        level: this.state.student_one_level
      },
      {
        name: this.state.student_two_name,
        level: this.state.student_one_level
      }
    ].filter((child) => {
      return child.name.trim() != '' && child.level.trim() != ''
    })
  }

  parentParams = () => {
    return {
      name: this.state.parent_name.trim(),
      email: this.state.parent_email.trim(),
      phone_number: this.state.parent_phone_number.trim(),
      center: this.state.center.trim()
    }
  }

  removeChild = () => {
    this.setState({
      student_two_name: '',
      student_two_level: ''
    })
  }

  render() {
    return (<div className="">
      <div className="container page-index">
      <div className="page-title">
        <h2>We'll love to hear from you</h2>
        <h5>Please come with your laptop :)</h5>
        </div>

        <ApplicationForm
          onChange={this.handleInput}
          onSubmit={this.handleSubmit}
          buttonDisabled={this.props.summerClub.isSending}
          removeChild={this.removeChild}
          errors={this.state.formErrors}
        />
      </div>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    summerClub: state.summerClub
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    summerClubApplication
  }, dispatch)
}

export default DocumentTitle('Summer Club')(connect(
  mapStateToProps,
  mapDispatchToProps
)(SummerClub));
