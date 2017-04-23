import React from 'react'
import { Link } from 'react-router';
import CurriculumBody from './CurriculumBody';

class CurriculumPage extends React.Component {
   render () {
     return (
       <div>
        <section className="curriculum page">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-xs-center body-pad">
                <h3 className="page-header">Curriculum</h3>
                <table className="table">
                  <CurriculumBody/>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
     )
   }
 }

 export default CurriculumPage;
