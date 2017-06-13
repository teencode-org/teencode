import React from 'react';
import { Leads } from './data';
export default class Leadership extends React.Component {
  render() {
    return (
      <section className="half-section leadership">
        <div className="container">
          <div className="row">
            <h4 className="section-heading">Leadership</h4>
              {Leads.map((lead, index) => {
                return (
                  <div key={index} className="col-sm-6 col-md-4 lead">
                    <h5>{lead.name}</h5>
                    <p>{lead.position}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </section> 
    );
  }
}
