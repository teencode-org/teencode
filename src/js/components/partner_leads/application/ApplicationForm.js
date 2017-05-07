import React, { PropTypes } from 'react';
import logo from '../../../../img/logo-colored.png';

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
            <div className="form-group row">
              <label htmlFor="schoolName" className="col-md-4 col-sm-12 col-form-label">Name of your school:</label>
              <div className="col-md-8 col-sm-12">
                <input type="text"
                        className="form-control form-control-lg"
                        id="message"
                        onChange={this.props.onChange}
                        placeholder="School" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword3" className="col-md-4 col-sm-12  col-form-label">Your email:</label>
              <div className="col-md-8 col-sm-12">
                <input type="email"
                        className="form-control form-control-lg"
                        id="email"
                        onChange={this.props.onChange}
                        placeholder="Email" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="phoneNum" className="col-md-4 col-sm-12  col-form-label">Your phone number:</label>
              <div className="col-md-8 col-sm-12">
                <input type="tel"
                        className="form-control form-control-lg"
                        id="phone_number"
                        onChange={this.props.onChange}
                        placeholder="Phone number" />
              </div>
            </div>
            <div className="form-group row btn-row">
              <button className="btn btn-action" onClick={this.props.submitApplication} disabled={this.state.buttonDisabled}>Apply</button>
            </div>
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
