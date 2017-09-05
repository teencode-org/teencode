import React from 'react'
import CurriculumTableContainer from './CurriculumTable';
import DocumentTitle from '../common/DocumentTitle';

export class FacilitatorGuidePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <section className="facilitor-guide page">
        <div className="container">
          <div className="row">
            <aside className="col-md-2 affixed-top" style={{borderRight: '1px solid', height: '500px'}}>
              
            </aside>
            <div className="col-lg-9 text-xs-center body-pad" style={{height: '100vh'}}>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default DocumentTitle('Facilitor Guide')(FacilitatorGuidePage);
