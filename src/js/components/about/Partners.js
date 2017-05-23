import React from 'react';
import {PartnersImages } from './config';
export default class Partners extends React.Component {
  render() {
    return (
      <section className="half-section partners">
        <div className="container">
          <div className="row">
            <h4 className="section-heading">Partners</h4>
            <div className="partners-images">
              {PartnersImages.map((image, index) => {
                return (
                  <div key={index} className='col-sm-6 col-md-4'>
                    <img src={require('../../../img/' + image)} alt=""/>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section> 
    );
  }
}