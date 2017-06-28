/*global SEGMENT_KEY:true*/

import React, { PropTypes } from 'react'
import { getCurriculum } from '../../actions/curriculumActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Objectives from './Objectives'
import Resources from './Resources'
import Projects from './Projects'
import Loader from '../common/Loader'
import EmptyPage from '../common/EmptyPage'

export class CurriculumTable extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCurriculum()
  }

  loadCurriculumContent() {
    const { hasBeenFetched, curriculumList } = this.props.curriculum;
    if (!hasBeenFetched) return <Loader owner="curriculum"/>;
    if (curriculumList.length) {
      // sort curriculumList based on order
      let sortedCurriculumList = curriculumList.sort((objA, objB) => objA.order - objB.order);
      return (
        <div>
          <h3 className="page-header">Curriculum</h3>
          <table className="table table-responsive">
            <tbody>
              {sortedCurriculumList.map(curriculumSession =>
                <tr key={curriculumSession.id}>
                  <td>
                    <h6 className="cur-period">{curriculumSession.title}</h6>
                    <p>{curriculumSession.description}</p>
                  </td>
                  <td>
                    <Objectives
                      title={curriculumSession.objective.title}
                      notes={curriculumSession.objective.notes} />
                    <Resources
                      title={curriculumSession.resource.title}
                      notes={curriculumSession.resource.notes} />
                    <Projects
                      title={curriculumSession.project.title}
                      notes={curriculumSession.project.notes} />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )
    }
    return <EmptyPage message="There is no curriculum at this time. Please check back later."/>;
  }

  render () {
    return this.loadCurriculumContent()
  }
}

CurriculumTable.propTypes = {
  getCurriculum: PropTypes.func.isRequired,
  curriculum: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    curriculum: state.curriculum
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCurriculum
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurriculumTable);
