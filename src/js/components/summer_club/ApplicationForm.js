import PropTypes from 'prop-types';
import React from 'react';
import TextField from '../common/form/TextField';
import SelectField from '../common/form/SelectField';
import Submit from '../common/form/Submit';
import ErrorMessage from '../common/form/ErrorMessage';

const LEVELS = [
  'JSS 3',
  'SSS 1',
  'SSS 2',
  'SSS 3'
]

const LOCATIONS = [
  'Lagos Mainland',
  'Lagos Island'
]

class ApplicationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonDisabled: false,
      additionalChild: false
    }
  }


  componentWillMount(nextProps) {
    this.setState({buttonDisabled: false})
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({buttonDisabled: nextProps.buttonDisabled})
  }

  removeChild = () => {
    this.setState({additionalChild: false})
    this.props.removeChild()
  }

  render() {
    const {
      errors
    } = this.props;

    return (
      <content className="wrapper">
        <form>
          <div className="form-panel-wrapper">
            <div className="panel panel-default form-panel">
              <div className="panel-heading form-panel-heading"><h3>Parent Details</h3></div>
              <div className="panel-body form-panel-body">
                <TextField
                    placeholder="e.g: Kate Joseph"
                    name="parent_name"
                    label="Parent Name"
                    isRequired
                    onChange={this.props.onChange}
                    errorMessage={errors.name}
                />
                <TextField
                    placeholder="e.g: kate_joseph@example.com"
                    type="email"
                    name="parent_email"
                    label="Parent Email"
                    onChange={this.props.onChange}
                    errorMessage={errors.email}
                />

                <TextField
                    placeholder="e.g: 08032128530"
                    name="parent_phone_number"
                    label="Phone Number"
                    onChange={this.props.onChange}
                    errorMessage={errors.phone_number}
                />

                <SelectField
                    name="center"
                    label="Prefered Center"
                    onChange={this.props.onChange}
                    options={LOCATIONS}
                    placeholder="Select Prefered Center"
                    errorMessage={errors.center}
                />
              </div>
          </div>

          <div className="panel panel-default form-panel">
            <div className="panel-heading form-panel-heading">
              <h3
                style={{
                  textAlign: 'center'
                }}
              >
                Student Details
                <ErrorMessage message={errors.children}/>
              </h3>
            </div>
            <div className="panel-body form-panel-body">
              <TextField
                  placeholder="e.g: John Joseph"
                  name="student_one_name"
                  label="Ward Name"
                  onChange={this.props.onChange}
              />

              <SelectField
                  name="student_one_level"
                  label="Ward Level"
                  onChange={this.props.onChange}
                  options={LEVELS}
                  placeholder="Select Student's Class"
              />
            </div>
          </div>

          {this.state.additionalChild && <div className="panel panel-default form-panel">
            <div className="panel-heading form-panel-heading"><h3>Student Details</h3></div>
            <div className="panel-body form-panel-body">
              <TextField
                  placeholder="e.g: Roselyn Joseph"
                  name="student_two_name"
                  label="Ward Name"
                  onChange={this.props.onChange}
              />

              <SelectField
                  placeholder="Select Student's Class"
                  name="student_two_level"
                  label="Ward Level"
                  onChange={this.props.onChange}
                  options={LEVELS}
              />
            </div>
          </div>}
        </div>

        {!this.state.additionalChild ? <button type="button" className="btn btn-primary btn-lg" onClick={() => this.setState({additionalChild: true})}>
          Add Second Ward
        </button> : <button type="button" className="btn btn-primary btn-lg" onClick={this.removeChild}>
          Remove Second Ward
        </button>}

          <Submit
              label="Submit"
              disabled={this.state.buttonDisabled}
              onClick={this.props.onSubmit}
          />
        </form>
      </content>
    )
  }
}

ApplicationForm.propTypes = {
  onChange: PropTypes.func,
  handleChildInput: PropTypes.func,
  onSubmit: PropTypes.func,
  removeChild: PropTypes.func,
  buttonDisabled: PropTypes.bool
}

export default ApplicationForm;
