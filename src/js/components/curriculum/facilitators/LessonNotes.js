import React, { PropTypes } from 'react'
import DocumentTitle from '../../common/DocumentTitle';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLessonNotes } from '../../../actions/curriculumActions';
import Loader from '../../common/Loader';
import FacilitorTemplate from './Template';

export class LessonNotes extends React.Component {
  componentDidMount() {
    const { sessionId, id } = this.props.params;
    this.props.getLessonNotes(sessionId, id);
  }

  render () {
    const { hasBeenFetched, notes } = this.props.curriculum;
    if (!hasBeenFetched) return <Loader owner="lesson notes"/>;
    return <FacilitorTemplate content={notes} params={this.props.params} />;
  }
}

LessonNotes.propTypes = {
  getLessonNotes: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  curriculum: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    curriculum: state.curriculum
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getLessonNotes
  }, dispatch)
}

export default DocumentTitle('Lesson Notes')(connect(
  mapStateToProps,
  mapDispatchToProps
)(LessonNotes));
