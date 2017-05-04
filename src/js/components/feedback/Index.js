import React from 'react';
import { Link } from 'react-router';
import logo from '../../../img/logo-colored.png';
import DocumentTitle from '../common/DocumentTitle';
import toastr from 'toastr';

class Feedback extends React.Component {
  render() {
    toastr.options.positionClass = "toast-top-right";
    toastr.options.preventDuplicates = true;

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

export default DocumentTitle('Feedback')(Feedback);
