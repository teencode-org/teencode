import React, {PropTypes} from 'react';
import toastr from 'toastr';

class PartnerLeads extends React.Component {
  componentWillMount() {
    toastr.options.positionClass = "toast-top-right";
    toastr.options.preventDuplicates = true;
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