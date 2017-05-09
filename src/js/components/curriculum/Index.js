import React from 'react'
import { Link } from 'react-router';
import { CurriculumTable } from './CurriculumTable';
import DocumentTitle from '../common/DocumentTitle';

export class CurriculumPageContainer extends React.Component {
  render () {
    return (
      <section className="curriculum page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-xs-center body-pad">
              <CurriculumTable/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default DocumentTitle('Curriculum')(CurriculumPageContainer);
