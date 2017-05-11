import React, { PropTypes } from 'react';
import ApplicationForm from './ApplicationForm';
import logo from '../../../../img/logo-colored.png';
import toastr from 'toastr';
import { Link, browserHistory } from 'react-router';
import { apply } from '../../../actions/applicationActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentTitle from '../../common/DocumentTitle';

export class ApplicationPageContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone_number: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.application.hasBeenSent) {
      browserHistory.push('/feedback/success/application')
    }
  }

  updateApplication = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitApplication = (event) => {
    event.preventDefault();
    event.target.value = 'Submitting ...';
    this.props.apply(this.state)
  }

  render() {
    return (
      <div className="container page-index eligibility-check apply">
        <div className="header">
          <img src={logo} />
          <Link to="/">
            <i className="fa fa-window-close" aria-hidden="true" />
          </Link>
        </div>

        <div className="page-title">
          <h2>You are eligible!!!</h2>
          <p>Join us in building Africa's next generation of Tech Leaders.</p>
        </div>

        <ApplicationForm
          onChange={this.updateApplication}
          submitApplication={this.submitApplication}
          buttonDisabled={this.props.application.isSending}
        />
      </div>
    )
  }
}

ApplicationPageContainer.propTypes = {
  apply: PropTypes.func.isRequired,
  application: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    application: state.application
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    apply: apply
  }, dispatch)
}

export default DocumentTitle('Application')(connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationPageContainer));
