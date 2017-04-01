import React from 'react';
import { Link } from 'react-router';
import logo from '../../../../img/logo.png';

const ApplicationPage = () => {
  return (
    <div className="container eligibility-check">
      <div className="header">
        <img src={logo} />
        <Link to="/">
          <i className="fa fa-window-close" aria-hidden="true" />
        </Link>
      </div>

      <div className="page-title">
        <h2>You are eligible!!!</h2>
        <small>Join us in building Africa's next generation of Tech Leaders!</small>
      </div>

      <content className="wrapper">

        <div className="container">
          <form>
            <div className="form-group row">
              <label for="inputEmail3" className="col-md-4 col-sm-12 col-form-label">Name of your school:</label>
              <div className="col-md-8 col-sm-12">
                <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword3" className="col-md-4 col-sm-12  col-form-label">Your email:</label>
              <div className="col-md-8 col-sm-12">
                <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword3" className="col-md-4 col-sm-12  col-form-label">Your phone number:</label>
              <div className="col-md-8 col-sm-12">
                <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
              </div>
            </div>
            <button className="btn btn-action" >Apply</button>
          </form>
        </div>


      </content>
    </div>

  )
}

export default ApplicationPage;
