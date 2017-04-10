import React from 'react';
import { Link, IndexLink } from 'react-router';
import utils from '../../utils';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.stickyToggle = this.stickyToggle.bind(this);
    this.navLinkOnClick = this.navLinkOnClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  stickyToggle(sticky) {
    const stickyHeight = sticky.clientHeight;
    const stickyTop = sticky.offsetTop;
    const scrollTop = document.body.scrollTop;

    if (scrollTop > stickyHeight + stickyTop){
      utils.addClass(sticky, 'is-sticky');
    } else if (scrollTop <= stickyTop) {
      utils.removeClass(sticky, 'is-sticky');
    }
  }

  navLinkOnClick(event) {
    let href = event.target.getAttribute('href');
    $('html, body').stop().animate({
        scrollTop: ($(href).offset().top - 50)
    }, 1250);
    event.preventDefault();
  }

  handleScroll() {
    const sticky = document.querySelector('[data-toggle="sticky-onscroll"]');
    this.stickyToggle(sticky);
  }

  render() {
    return (
      <nav id="top-nav" className="navbar navbar-full navbar-custom navbar-fixed-top" data-toggle="sticky-onscroll">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggler hidden-md-up pull-xs-right pull-sm-right" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
              &#9776;
            </button>
            <Link to="#page-top" className="navbar-brand page-scroll nav-link" onClick={this.navLinkOnClick}>
              <img src={require('../../../img/logo.png')}/>
            </Link>
          </div>
          <div className="collapse navbar-toggleable-sm" id="collapsingNavbar">
            <ul className="nav navbar-nav pull-md-right">
              <li className="nav-item">
                <Link to="#volunteer" className="page-scroll nav-link" onClick={this.navLinkOnClick}>Volunteers</Link>
              </li>
              <li className="nav-item">
                <Link to="#how" className="page-scroll nav-link" onClick={this.navLinkOnClick}>Process</Link>
              </li>
              <li className="nav-item">
                <Link to="#testimonials" className="page-scroll nav-link" onClick={this.navLinkOnClick}>Testimonials</Link>
              </li>
              <li className="nav-item">
                <Link to="#sponsor" className="page-scroll nav-link" onClick={this.navLinkOnClick}>Sponsors</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
