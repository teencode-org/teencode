import React from 'react';
import { Link, IndexLink } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.navLinkOnClick = this.navLinkOnClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  navLinkOnClick(event) {
    let target = $(event.target).attr('href') ? event.target : $(event.target).parents(".page-scroll")[0];
    let href = $(target).attr('href');
    $('html, body').stop().animate({
        scrollTop: ($(href).offset().top - 50)
    }, 1250);
    event.preventDefault();
  }

  isHomeLink() {
    return window.location.pathname === '/';
  }

  generateDropdownLink(path, name, linkMap) {
    let links = Object.keys(linkMap).map((key, index) => {
      return (
        <Link key={index} to={`#${key}`} className="page-scroll dropdown-item" onClick={this.navLinkOnClick}>{linkMap[key]}</Link>
      )
    });
    if (window.location.pathname === path) {
      return (
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" onlyActiveOnIndex activeClassName="active" to="#" data-href={path} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {name} <span className="caret down"></span>
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            {links}
          </div>
        </li>
      )
    }
    return (
      <li className="nav-item">
        <Link to={path} activeClassName="active" onlyActiveOnIndex className="nav-link">{name}</Link>
      </li>
    )
  }

  handleScroll() {
    const sticky = document.querySelector('[data-toggle="sticky-onscroll"]');
    const stickyHeight = sticky.clientHeight;
    const stickyTop = sticky.offsetTop;
    const scrollTop = document.body.scrollTop;

    if (scrollTop > stickyHeight + stickyTop){
      $(sticky).addClass('is-sticky');
    } else if (scrollTop <= stickyTop) {
      this.isHomeLink() && $(sticky).removeClass('is-sticky');
    }
  }

  render() {
    let stickyClass = this.isHomeLink() ? '' : 'is-sticky'
    return (
      <nav id="top-nav" className={`navbar navbar-full navbar-custom navbar-fixed-top ${stickyClass}`} data-toggle="sticky-onscroll">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggler hidden-md-up pull-xs-right pull-sm-right" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
              &#9776;
            </button>
            <Link to="#intro" className="navbar-brand page-scroll" onClick={this.navLinkOnClick}><img src={require('../../../img/logo.png')}/></Link>
          </div>
          <div className="collapse navbar-toggleable-sm" id="collapsingNavbar">
            <ul className="nav navbar-nav pull-md-right">
              {this.generateDropdownLink('/', 'Home', {how: 'Process', testimonials: 'Testimonials', sponsor: 'Sponsors'})}
              <li className="nav-item">
                <Link to="/volunteer" activeClassName="active" className="nav-link">Volunteers</Link>
              </li>
              <li className="nav-item">
                <Link to="/curriculum" activeClassName="active" className="nav-link">Curriculum</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
