import React from 'react';
import { Link } from 'react-router';
import jquery from 'jquery';

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
    const stickyFeedback = event.target.querySelector('footer');
    const stickyHeight = stickyFeedback.clientHeight;
    const stickyTop = stickyFeedback.offsetTop;
    const scrollTop = document.body.scrollTop;

    console.log(scrollTop, stickyTop - stickyHeight);
    if (scrollTop < stickyTop - stickyHeight - 200) {
      console.log('triggered');
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
              <Link to="/partner-leads/check-eligibility" className="btn btn-eligibility" > 
                <i className="fa fa-question-circle"></i>Check if your school is eligible
              </Link>
            </div>
            <div className="offset-sm-1 col-sm-4 col-xs-10 vision">
              <p>
                Our vision is the widespread adoption of Computer Programming in High Schools in Africa with a syllabus maintained by experts in the field.
              </p>
              <Link className="more" to="#how" onClick={this.clickLink}>Learn more about our mission and vision >> </Link>
            </div>
            <div className="offset-sm-1 col-sm-3 col-xs-10 feedback">
              <p>
                CONTACT US <br/>
                <i className="fa fa-envelope-o"></i> teencodeafrica@gmail.com
              </p>
              <button className="btn btn-feedback" href="/feedback">
                <i className="fa fa-comment-o"></i> 
                Feedback? Please share
              </button>
            </div>
          </div>
        </div>
        <div className="row footer-bottom">
          <div className="col-sm-3 col-xs-10">
            <span className="copyright">
              (c) 2017 TEENCODE AFRICA
            </span>
          </div>
          <div className="offset-sm-3 col-sm-2 col-xs-2 socials">
            <a href="https://www.facebook.com/Teencode-Africa-1345535292156762/" target="_blank">
              <i className="fa fa-facebook-square fa-2x"></i
            ></a>
            
            <a href="#" target="_blank"><i className="fa fa-twitter-square fa-2x"></i></a>
          </div>
          <div className="offset-sm-1 col-sm-2 col-xs-6 policy">
            <a href="#">PRIVACY POLICY</a>
          </div>
          <div className="col-sm-1 col-xs-6 sitemap">
            <a href="#">SITEMAP</a>
          </div>
        </div>
        <div className="feedback-sticky" style={{ display: this.state.sticky }}>
          <Link to="/feedback">
          <div className="share-feedback">
            <span>Share your feedback!</span>
            <img src={require('../../../img/chineze-face-transparent-bg.png')} />
          </div>
          </Link>
        </div>
      </footer>
    )
  }
}

export default Footer;
