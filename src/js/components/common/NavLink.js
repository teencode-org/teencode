import React from 'react'
import { Link } from 'react-router'
import jquery from 'jquery'

class NavLink extends React.Component {
  generateNavLink() {
    let links = Object.keys(this.props.subLinks).map((key) => {
      return (
        <Link
          key={key}
          to={`#${key}`}
          className="page-scroll dropdown-item"
          onClick={this.props.subLinkOnClick}
        >
          {this.props.subLinks[key]}
        </Link>
      )
    });

    if (window.location.pathname === this.props.path && Object.keys(this.props.subLinks).length) {
      return (
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            onlyActiveOnIndex
            activeClassName="active"
            to="#"
            data-href={this.props.path}
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {this.props.name} <span className="caret down"></span>
          </Link>
          <div className="dropdown-menu">
            {links}
          </div>
        </li>
      )
    }

    return (
      <li className="nav-item">
        <Link
          to={this.props.path}
          activeClassName="active"
          onlyActiveOnIndex
          className="nav-link"
        >
          {this.props.name}
        </Link>
      </li>
    )
  }

  render() {
    return this.generateNavLink();
  }
}

NavLink.defaultProps = {
  subLinks: {}
}

NavLink.propTypes = {
  path: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  subLinkOnClick: React.PropTypes.func,
  subLinks: React.PropTypes.object
}

export default NavLink;
