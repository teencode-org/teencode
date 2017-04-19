import React from 'react'
import { Link } from 'react-router';

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
                  <tbody>
                      <tr>
                          <td>
                            <h6 className="cur-period">First Session</h6>
                          </td>
                          <td>
                            <h5 className="cur-head">Objective</h5>
                            <p>At the end of the week, the students should:</p>
                            <div className="objectives">
                              <p>Be excited about learning how to code.</p>
                              <p>Be inspired to learn coding.</p>
                              <p>Be enlightened about the opportunities out there for coding.</p>
                              <p>Be able to use scratch to animate their names.</p>
                            </div>
                            <h5 className="cur-head">Inspirational videos about CS:</h5>
                            <div className="cur-links">
                              <a target="_blank" href="https://www.youtube.com/watch?v=z-OxzIC6pic">Computer Science 101</a>
                              <a target="_blank" href="https://www.youtube.com/watch?v=ljmfzjSW1Ew">Computer Science for kids</a>
                            </div>
                            <h5 className="cur-head">Introduction to Scratch I</h5>
                            <p>Animate your name.</p>
                          </td>
                      </tr>
                      <tr>
                          <td>
                            <h6 className="cur-period">Second Session</h6>
                          </td>
                          <td>
                            <h5 className="cur-head">Objective</h5>
                            <p>At the end of the week, the students should:</p>
                            <div className="objectives">
                              <p>Be able to describe how internet and its parts.</p>
                              <p>Deliver a simple pong game built using Scratch.</p>
                            </div>
                            <h5 className="cur-head">Videos about the Internet</h5>
                            <div className="cur-links">
                              <a target="_blank" href="https://www.youtube.com/watch?v=Dxcc6ycZ73M&list=PLzdnOPI1IJNfMRZm5DDxco3UdsFegvuB7">What is the internet?</a>
                              <a target="_blank" href="http://thekidshouldseethis.com/post/26674356049">An example of how the internet works when you visit a webpage</a>
                              <a target="_blank" href="http://theshulers.com/whitepapers/internet_whitepaper">More detailed explanation of how the internet works</a>
                            </div>
                            <h5 className="cur-head">Introduction to Scratch II</h5>
                            <p className="cur-link-text">Create a Pong Game.</p>
                            <div className="cur-links">
                              <a target="_blank" href="http://coderdojowestcork.files.wordpress.com/2012/05/ping-pong-game_tutorial.pdf">Ping Pong Game: Step-by-Step Tutorial</a>
                            </div>
                          </td>
                      </tr>
                  </tbody>
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
