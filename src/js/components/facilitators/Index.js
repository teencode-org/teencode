import React, { Component } from 'react';
import DocumentTitle from '../common/DocumentTitle';

export class FacilitatorsDashboardContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="curriculum page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-xs-center body-pad">
              <p>Placeholder</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default DocumentTitle('Facilitators')(FacilitatorsDashboardContainer);
