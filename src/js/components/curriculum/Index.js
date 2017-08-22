import React from 'react'
import CurriculumTableContainer from './CurriculumTable';
import DocumentTitle from '../common/DocumentTitle';

export class CurriculumPageContainer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <section className="curriculum page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-xs-center body-pad">
              <CurriculumTableContainer />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default DocumentTitle('Curriculum')(CurriculumPageContainer);
