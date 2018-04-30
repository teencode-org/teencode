import React from "react";

import Header from "../common/Header";


const NotFoundPage = () => {
    return (
        <div className="not-found">
            <div className="container">
                <content className="wrapper">
                    <div className="page-title">
                        <h2>404. No one can find this page :(</h2>
                    </div>
                    <div className="row space-up">
                        <div className="col-md-6">
                            <p className="not-found-text">
                                The entire Teencode community - students, facilitators,
                                school administrators, parents and partners organizations
                                - are also not able to find this page
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img className="img-responsive" src={require('../../../img/people.png')} />
                        </div>
                    </div>
                    <div className="redirect-info">
                        <div className="homepage-redirect-text">
                            <span>The </span>
                            <a href="/" className="btn btn-outline">Home Page</a>
                            <span>
                                has some useful information though
                            </span>
                            <br/><br/>
                            <span> You could also check out the </span>
                            <a href="/curriculum" className="btn btn-outline">Curriculum</a>
                            <span> we use.</span>
                        </div>
                    </div>
                </content>
            </div>
        </div>
    );
};

export default NotFoundPage;