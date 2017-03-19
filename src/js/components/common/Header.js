import React from 'react';
import { Link, IndexLink } from 'react-router';
import logo from '../../../img/logo.png';

const Header = () => {
  return (
    <nav id="top-nav" className="navbar navbar-full navbar-custom navbar-fixed-top" data-toggle="sticky-onscroll" data-offset-top="100">
      <div className="container">
        <div className="navbar-header">
          <button className="navbar-toggler hidden-md-up pull-xs-right pull-sm-right" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
            &#9776;
          </button>
          <Link to="#page-top" className="navbar-brand page-scroll"><img src={logo}/></Link>
        </div>
        <div className="collapse navbar-toggleable-sm" id="collapsingNavbar">
          <ul className="nav navbar-nav pull-md-right">
            <li className="nav-item">
              <Link to="#team" className="page-scroll nav-link">Who We Are</Link>
            </li>
            <li className="nav-item">
              <Link to="#services" className="page-scroll nav-link">What We Do</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;
