import React from 'react';
import { Link } from 'react-router';
import logo from '../../../img/logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <span className="copyright">Copyright &copy; <img src={logo} alt="Site Logo" /> 2017</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
