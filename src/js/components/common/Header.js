import React from 'react';
import { Link, IndexLink } from 'react-router';
import NavLink from './NavLink';
import jquery from 'jquery';
import { addClass, removeClass } from 'Utils/helpers'
import * as flagChecks from 'Utils/featureFlagChecks';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.subLinkOnClick = this.subLinkOnClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  subLinkOnClick(event) {
    let href = event.currentTarget.getAttribute('href');
    jquery('html, body').stop().animate({
      scrollTop: (jquery(href).offset().top - 50)
    }, 1250);
    event.preventDefault();
  }

  isHomeLink() {
    return window.location.pathname === '/';
  }

  handleScroll(event) {
    const sticky = event.target.querySelector('[data-toggle="sticky-onscroll"]');
    const stickyHeight = sticky.clientHeight;
    const stickyTop = sticky.offsetTop;
    const scrollTop = document.body.scrollTop;

    if (scrollTop > stickyHeight + stickyTop) {
      addClass(sticky, 'is-sticky');
    } else if (scrollTop <= stickyTop) {
      if (this.isHomeLink()) {
        removeClass(sticky, 'is-sticky');
      }
    }
  }

  render() {
    let stickyClass = this.isHomeLink() ? '' : 'is-sticky';
    const slackSignInURL = "https://slack.com/oauth/authorize?scope=identity.basic,identity.email&client_id=158660860388.380264000787";
    return (
      <nav id="top-nav" className={`navbar navbar-full navbar-custom navbar-fixed-top ${stickyClass}`} data-toggle="sticky-onscroll">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggler hidden-md-up pull-xs-right pull-sm-right" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
              &#9776;
            </button>
            <Link to="/" className="navbar-brand page-scroll nav-link" onClick={this.subLinkOnClick}>
              <img src={require('../../../img/logo.png')} />
            </Link>
          </div>
          <div className="collapse navbar-toggleable-sm" id="collapsingNavbar">
            <ul className="nav navbar-nav pull-md-right">
              <NavLink
                path="/"
                name="Home"
                subLinkOnClick={this.subLinkOnClick}
                subLinks={{
                  how: 'Process',
                  testimonials: 'Testimonials',
                  sponsor: 'Sponsors'
                }}
              />
              {flagChecks.aboutUsIsEnabled() && <NavLink path="/about-us" name="About" />}
              {flagChecks.curriculumIsEnabled() && <NavLink path="/curriculum" name="Curriculum" />}
              {flagChecks.blogPageIsEnabled() && <NavLink path="/blog" name="Blog" />}
              {flagChecks.volunteerPageIsEnabled() && <NavLink path="/volunteer" name="Volunteers" />}
              {flagChecks.contactUsIsEnabled() && <NavLink path="/contact-us" name="Contact Us" />}
              {flagChecks.facilitatorSignInIsEnabled() && <NavLink path={slackSignInURL} name="Sign In" target="_blank" />}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
