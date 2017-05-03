import React from 'react';
import { Link } from 'react-router';
import logo from '../../../../img/logo-colored.png';

const AppreciationPage = () => {
  return (
    <div className="container eligibility-check apply">
      <div className="header">
        <img src={logo} />
      </div>

      <div className="page-title">
        <h2>We've received your application!</h2>
        <p>Thank you for reaching out to partner with us. We will be reaching out shortly by sending you an email or a text message.</p>
      </div>

      <content className="wrapper">
        <div className="form-group row btn-row">
          <Link to="/#volunteer" className="btn btn-action" >Close</Link>
        </div>
      </content>
    </div>

  )
}

export default AppreciationPage;
