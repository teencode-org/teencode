import React, {PropTypes} from 'react';
import toastr from 'toastr';

class PartnerLeads extends React.Component {
  render() {
    toastr.options.positionClass = "toast-top-right";
    toastr.options.preventDuplicates = true;

    return (
      <div className="partner-leads">
        {this.props.children}
      </div>
    )
  }
}

export default PartnerLeads;