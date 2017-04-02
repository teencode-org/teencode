import React from 'react';
import { Link } from 'react-router';
import logo from '../../../../img/logo-colored.png';

const ApplicationPage = ({ onChange, submitApplication }) => {
  return (
    <div className="container eligibility-check apply">
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

      <content className="wrapper">

        <div className="container">
          <form>
            <div className="form-group row">
              <label for="schoolName" className="col-md-4 col-sm-12 col-form-label">Name of your school:</label>
              <div className="col-md-8 col-sm-12">
                <input type="text"
                       className="form-control form-control-lg"
                       id="message"
                       onChange={onChange}
                       placeholder="School" />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword3" className="col-md-4 col-sm-12  col-form-label">Your email:</label>
              <div className="col-md-8 col-sm-12">
                <input type="email"
                       className="form-control
                       form-control-lg"
                       id="email"
                       onChange={onChange}
                       placeholder="Email" />
              </div>
            </div>
            <div className="form-group row">
              <label for="phoneNum" className="col-md-4 col-sm-12  col-form-label">Your phone number:</label>
              <div className="col-md-8 col-sm-12">
                <input type="tel"
                       className="form-control form-control-lg"
                       id="phone_number"
                       onChange={onChange}
                       placeholder="Phone number" />
              </div>
            </div>
            <div className="form-group row btn-row">
              <button className="btn btn-action" onClick={submitApplication} >Apply</button>
            </div>
          </form>
        </div>


      </content>
    </div>

  )
}

export default ApplicationPage;
