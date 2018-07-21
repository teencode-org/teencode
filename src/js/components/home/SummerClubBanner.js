import React from 'react';
import { Link } from 'react-router';

const SummerClubBannner = () => (
  <section id="intro" className="summer-club">
    <div className="summer-club__left">
      <img src={require('../../../img/students.png')} alt="" />
    </div>

    <div className="summer-club__info">
      <div className="summer-club__info-container">
        <h1 className="summer-club__headline">Learn To <span>Code for Free</span></h1>
        <p className="summer-club__subheadline">SUMMER CLUB FOR TEENAGERS (JSS3 -SS3) - LAGOS, NIGERIA</p>
        <ul className="summer-club__benefits">
          <li>Introduction to problem solving</li>
          <li>Learn relevant soft skills</li>
          <li>Build Web applictions from scratch</li>
        </ul>
        <div className="summer-club__date-venue">
          <p>Saturdays on 4th August - 1st Sept</p>
        </div>
        <h3 className="summer-club__slots">Only 80 slots Available</h3>
        <Link to="/summer-club">Register Your ward(s)</Link>
      </div>
    </div>
  </section>
)


export default SummerClubBannner;
