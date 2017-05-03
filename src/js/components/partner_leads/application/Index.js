import React from 'react';
import ApplicationPage from './ApplicationPage';
import {apply} from '../../../actions/applicationActions';
import toastr from 'toastr';
import {browserHistory} from 'react-router';

class ApplicationPageContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      message: '',
      email: '',
      phone_number: ''
    }
  }
  updateApplication = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }

  sendApplication = (event, state) => {
    apply(state)
      .then(data => {
        toastr.success(`Application successful for ${data.message}`);
        browserHistory.push('/partner-leads/thank-you');
      })
      .catch(err => {
        event.target.disabled = false;
        toastr.error('An error occurred. Please try again later');
      });
  }

  submitApplication = (e) => {
    e.preventDefault();
    e.target.value = 'Submitting ...';
    e.target.disabled = true;
    e.persist()
    this.sendApplication(e, this.state);
  }

  render() {
    return <ApplicationPage
            onChange={this.updateApplication}
            submitApplication={this.submitApplication} />
  }
}

export default ApplicationPageContainer;
