import PropTypes from 'prop-types';
import React from 'react';
import toastr from 'toastr';


class PartnerLeads extends React.Component {
  componentWillMount() {
    toastr.options.positionClass = "toast-top-right";
  }

  render() {
    return (
      <div className="partner-leads">
        {this.props.children}
      </div>
    )
  }
}

PartnerLeads.propTypes = {
  children: PropTypes.object.isRequired
}

export default PartnerLeads;