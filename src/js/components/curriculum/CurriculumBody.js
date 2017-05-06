/*global SEGMENT_KEY:true*/

import React, { PropTypes } from 'react'
import Objectives from './Objectives'
import Resources from './Resources'
import Projects from './Projects'
import curriculumList from './curriculumList'

class CurriculumBody extends React.Component {
  constructor(props) {
    super(props);
  }

   render () {
      return (
        <tbody>
          {Object.keys(curriculumList).map(key =>
            <tr key={key}>
              <td>
                <h6 className="cur-period">{curriculumList[key].title}</h6>
                <p>{curriculumList[key].description}</p>
              </td>
              <td>
                <Objectives
                  title={curriculumList[key].objectives.title}
                  values={curriculumList[key].objectives.values} />
                <Resources
                  title={curriculumList[key].resources.title}
                  values={curriculumList[key].resources.values} />
                <Projects
                  title={curriculumList[key].projects.title}
                  values={curriculumList[key].projects.values} />
              </td>
            </tr>
          )}
        </tbody>
      )
  }
}

export default CurriculumBody;
