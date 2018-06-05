import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';
import toastr from 'toastr';
import logo from 'Images/logo-colored.png';
import DocumentTitle from '../common/DocumentTitle';

class Feedback extends React.Component {
  componentWillMount() {
    toastr.options.positionClass = "toast-top-right";
  }

  render() {
    return (
      <div className="container page-index">
        <div className="header">
          <img src={logo} />
        </div>

        {this.props.children}

        <content className="wrapper">
          <div className="form-group row btn-row text-xs-center">
            <Link to="/" className="btn btn-action back-to-home">Back to home <i className="fa fa-home"></i></Link>
          </div>
        </content>
      </div>
    )
  }
}

Feedback.propTypes = {
  children: PropTypes.object.isRequired
}

export default DocumentTitle('Feedback')(Feedback);