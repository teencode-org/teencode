import React from 'react';
import { browserHistory } from 'react-router';
import ApplicationForm from './ApplicationForm';
import { bindActionCreators } from '../../../../node_modules/redux';
import DocumentTitle from '../common/DocumentTitle';
import { connect } from 'react-redux';
import { summerClubApplication } from '../../actions/summerClubActions';





class SummerClub extends React.Component {
  constructor() {
    super();

    this.state = {
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

  handleSubmit = (event) => {
    event.preventDefault();
    event.target.value = 'Submiting';
    const params = {parent: this.parentParams(), children: this.childrenParams()}

    this.props.summerClubApplication(params);
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
      return child.name != '' && child.level != ''
    })
  }

  parentParams = () => {
    return {
      name: this.state.parent_name,
      email: this.state.parent_email,
      phone_number: this.state.parent_phone_number,
      center: this.state.center
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
