import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <span className="copyright">
              Copyright &copy; <img src={require('../../../img/logo.png')} alt="Site Logo" /> 2017. All Rights Reserved
            </span>
          </div>
          <div className="offset-sm-11">
            <a href="https://www.facebook.com/Teencode-Africa-1345535292156762/" target="_blank"><i className="fa fa-facebook-square fa-2x"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
