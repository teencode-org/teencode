import React, {PropTypes} from 'react';

class PartnerLeads extends React.Component {
  render() {
    return (
      <div className="partner-leads">
        {this.props.children}
      </div>
    )
  }
}

export default PartnerLeads;