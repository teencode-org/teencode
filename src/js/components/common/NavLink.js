import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import jquery from 'jquery';
import SubLinks from './SubLinks';

class NavLink extends React.Component {
  generateNavLink() {
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
          <SubLinks
            subLinks={this.props.subLinks}
            subLinkOnClick={this.props.subLinkOnClick}
          />
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
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subLinkOnClick: PropTypes.func,
  subLinks: PropTypes.object
}

export default NavLink;
