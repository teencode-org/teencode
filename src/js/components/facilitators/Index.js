import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from '../common/DocumentTitle';
import config from '../../config';
import processRequest from '../../utils/webAPI';

const propTypes = {
  location: PropTypes.object.isRequired
}

export class FacilitatorsDashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentWillMount() {
    const { query } = this.props.location;
    if (!query.hasOwnProperty('error') && !query.hasOwnProperty('code')) {
      this.props.history.push('/');
    }

    if (query.code) {
      processRequest("/facilitators/auth", 'POST', { token: query.code })
        .then(response => {
          if (response.success === false) {
            // let user know that their request failed
            return;
          }
          this.setState({ user: response })
        })
    }

  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { user } = this.state;
    return (
      <section className="curriculum page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-xs-center body-pad">
              <p>Placeholder</p>
              { user.name && <p>Welcome {user.name}</p> }
            </div>
          </div>
        </div>
      </section>
    )
  }
}

FacilitatorsDashboardContainer.PropTypes = propTypes;

export default DocumentTitle('Facilitators')(FacilitatorsDashboardContainer);
