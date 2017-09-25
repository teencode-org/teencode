import React, { PropTypes } from 'react'
import DocumentTitle from '../../common/DocumentTitle';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFacilitatorGuide } from '../../../actions/curriculumActions';
import Loader from '../../common/Loader';
import FacilitorTemplate from './Template';

export class FacilitatorGuidePage extends React.Component {
  componentDidMount() {
    this.props.getFacilitatorGuide();
  }

  render () {
    const { hasBeenFetched, guide } = this.props.curriculum;
    if (!hasBeenFetched) return <Loader owner="facilitor guide"/>;

    return <FacilitorTemplate content={guide} />;
  }
}

FacilitatorGuidePage.propTypes = {
  getFacilitatorGuide: PropTypes.func.isRequired,
  guide: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    curriculum: state.curriculum
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getFacilitatorGuide
  }, dispatch)
}

export default DocumentTitle('Facilitor Guide')(connect(
  mapStateToProps,
  mapDispatchToProps
)(FacilitatorGuidePage));
