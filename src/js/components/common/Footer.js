import React from 'react';
import { Link } from 'react-router';
import jquery from 'jquery';
import FloatingFeedbackButton from './FloatingFeedbackButton';
import * as featureflags from '../../utils/featureFlagChecks';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sticky: 'none' };
    this.handleScroll = this.handleScroll.bind(this);
    this.clickLink = this.clickLink.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  clickLink(event) {
    let href = event.currentTarget.getAttribute('href');
    jquery('html, body').stop().animate({
        scrollTop: (jquery(href).offset().top - 10)
    }, 1250);
    event.preventDefault();
  }

  handleScroll(event) {
    const footer = event.target.querySelector('footer');
    const footerHeight = footer.offsetHeight * 3;
    const footerTop = footer.offsetTop;
    const scrollTop = document.body.scrollTop;

    if (scrollTop < (footerTop - footerHeight) && scrollTop > 100) {
      this.setState({ sticky: 'inline-block'});
    } else {
      this.setState({ sticky: 'none'});
    }
  }

  render(){
    return (
      <footer>
        <div className="container">   
          <div className="row footer-top">
            <div className="col-sm-3 col-xs-10 eligibility">
              <p>
                Are you a High School administrator or computer teacher and want to be a part of this?
              </p>
              <Link to="/partner-leads/check-eligibility" className="btn btn-primary" >
                <i className="fa fa-question-circle"></i>Check if your school is eligible
              </Link>
            </div>
            <div className="offset-sm-1 col-sm-4 col-xs-10 vision">
              <p>
                Our vision is the widespread adoption of Computer Programming in High Schools in Africa with a syllabus maintained by experts in the field.
              </p>
              <Link className="more" to="/#how" onClick={this.clickLink}>Learn more about our mission and vision >> </Link>
            </div>
            <div className="offset-sm-1 col-sm-3 col-xs-10 feedback">
              <p>
                CONTACT US <br/>
                <i className="fa fa-envelope-o"></i>
                <a href="mailto:teencodeafrica@gmail.com">teencodeafrica@gmail.com</a>
              </p>
              {featureflags.contactUsIsEnabled() && <Link to="/contact-us" className="btn btn-primary">
                <i className="fa fa-comment-o"></i> 
                We'll love to hear from you
              </Link>}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 col-xs-10">
                <span className="copyright">
                  (c) 2017 TEENCODE AFRICA
                </span>
              </div>
              <div className="offset-sm-2 col-sm-2 col-xs-2 socials">
                <a href="https://www.facebook.com/Teencode-Africa-1345535292156762/" target="_blank">
                  <i className="fa fa-facebook-square fa-2x"></i>
                </a>
                
                <a href="#" target="_blank"><i className="fa fa-twitter-square fa-2x"></i></a>
              </div>
              <div className="offset-sm-2 col-sm-2 col-xs-6 policy">
                <a href="#">PRIVACY POLICY</a>
              </div>
              <div className="col-sm-1 col-xs-6 sitemap">
                <a href="#">SITEMAP</a>
              </div>
            </div>
          </div>
        </div>
        {featureflags.contactUsIsEnabled() && <FloatingFeedbackButton  {...this.state} />}
      </footer>
    )
  }
}

export default Footer;
