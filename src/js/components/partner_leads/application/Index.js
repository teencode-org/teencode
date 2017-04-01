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
        <p>Join us in building Africa's next generation of Tech Leaders!</p>
      </div>

      <content className="wrapper">

        <div className="container">
          <form>
            <div className="form-group row">
              <label for="schoolName" className="col-md-4 col-sm-12 col-form-label">Name of your school:</label>
              <div className="col-md-8 col-sm-12">
                <input type="text" className="form-control form-control-lg" id="schoolName" placeholder="School" />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword3" className="col-md-4 col-sm-12  col-form-label">Your email:</label>
              <div className="col-md-8 col-sm-12">
                <input type="email" className="form-control form-control-lg" id="email" placeholder="Email" />
              </div>
            </div>
            <div className="form-group row">
              <label for="phoneNum" className="col-md-4 col-sm-12  col-form-label">Your phone number:</label>
              <div className="col-md-8 col-sm-12">
                <input type="number" className="form-control form-control-lg" id="phoneNum" placeholder="Phone number" />
              </div>
            </div>
            <div className="form-group row btn-row">
              <button className="btn btn-action" >Apply</button>
            </div>
          </form>
        </div>


      </content>
    </div>

  )
}

export default ApplicationPage;
