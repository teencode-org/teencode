import React from 'react';
import { Link } from 'react-router';
import logo from '../../../img/logo.png';

const ApplicationPage = () => {
  return (
    <div>
      <div className="modal-overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-4 recipient">
              <div className="to">To:</div>
              <div className="name">
                <p>TeenCodeAfrica</p>
                <p>teencodeafrica@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="container">
              <p>Hi</p>
              <div className="form">
                <form>
                  <div className="form-group row">
                    <label for="example-text-input" className="col-2 col-form-label">Text</label>
                    <div className="col-10">
                      <input className="form-control form-control-lg" type="text" value="Artisanal kale" id="example-text-input" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="example-search-input" className="col-2 col-form-label">Search</label>
                    <div className="col-10">
                      <input className="form-control" type="search" value="How do I shoot web" id="example-search-input" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="example-email-input" className="col-2 col-form-label">Email</label>
                    <div className="col-10">
                      <input className="form-control" type="email" value="bootstrap@example.com" id="example-email-input" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationPage;
