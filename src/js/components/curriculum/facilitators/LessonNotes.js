import React, { PropTypes } from 'react'
import DocumentTitle from '../../common/DocumentTitle';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLessonNotes } from '../../../actions/curriculumActions';
import Loader from '../../common/Loader';
import FacilitorTemplate from './Template';

export class LessonNotesPage extends React.Component {
  componentDidMount() {
    this.props.getLessonNotes();
  }

  render () {
    const { hasBeenFetched, notes } = this.props.curriculum;
    if (!hasBeenFetched) return <Loader owner="lesson notes"/>;

    return (
      <FacilitorTemplate content={notes} />
    )
  }
}

LessonNotesPage.propTypes = {
  getLessonNotes: PropTypes.func.isRequired,
  notes: PropTypes.object.isRequired
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
)(LessonNotesPage));
