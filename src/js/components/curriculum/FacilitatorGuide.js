import React, { PropTypes } from 'react'
import CurriculumTableContainer from './CurriculumTable';
import DocumentTitle from '../common/DocumentTitle';
import guideData from './guideDummyData';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import jquery from 'jquery';
import { sanitizeHtml, joinHtmlItemsWithCommaWithAnd } from '../../utils/helpers';
import SocialLinks from '../common/SocialLinks';
import { addClass, removeClass } from 'Utils/helpers'

export class FacilitatorGuidePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLinkIndex: 0
    };

    this.goToSection = this.goToSection.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const header = event.target.querySelector('.header-content');
    const sections = event.target.querySelectorAll('.guide-body h2');
    const headerHeight = header.clientHeight;
    const scrollTop = document.body.scrollTop;

    if (scrollTop > headerHeight - 150) {
      addClass(header, 'short-header');
    } else {
      removeClass(header, 'short-header');
    }

    for (let index = 0; index < sections.length; index++) {
      if (sections[index].offsetTop < scrollTop) {
        if (this.state.selectedLinkIndex !== index) {
          this.setState({selectedLinkIndex: index});
        }
      }
    }
  }

  goToSection(event) {
    let targetIndex = event.currentTarget.getAttribute('data-target');
    this.setState({selectedLinkIndex: targetIndex - 1});
    jquery('html, body').stop().animate({
        scrollTop: (jquery(`.guide-body h2:nth-of-type(${targetIndex})`).offset().top - 170)
    }, 500);
    event.preventDefault();
  }

  getTocLinks() {
    const tmpDiv = document.createElement('div');
    tmpDiv.innerHTML = this.props.guide.body;
    const headings = tmpDiv.getElementsByTagName('h2');
    let tocLinks = []
    for (let index in headings) {
      tocLinks.push(
        <li key={index} className="nav-item">
          <a data-target={parseInt(index) + 1} onClick={this.goToSection} className={`nav-link ${this.state.selectedLinkIndex === parseInt(index) ? 'active' : ''}`}>{headings[index].innerText}</a>
        </li>
      )
    }
    return tocLinks;
  }

  render () {
    const { guide } = this.props;
    const shareProps = {
      url: window.location.href,
      title: guide.title || '',
      imageUrl: '',
      description: ''
    };

    return (
      <section className="facilitor-guide">
        <div className="header-content">
          <div className="row">
            <div className="col-md-12">
              <h3>{guide.title}</h3>
              <div className="col-xs-6 text-sm-right header-content-titles">
                <p>Level</p>
                <p>Session</p>
                <p>Authors</p>
              </div>
              <div className="col-xs-6 header-content-body">
                <p>{guide.level}</p>
                <p>{guide.session}</p>
                <p dangerouslySetInnerHTML={{__html: sanitizeHtml(joinHtmlItemsWithCommaWithAnd(guide.authors.map(author => author.full_name)))}} />
              </div>
            </div>
          </div>
        </div>
        <div className="container main-content">
          <div className="row">
            <aside className="affixed-guide-links hidden-sm-down">
              <ul className="nav">
                {this.getTocLinks()}
              </ul>
            </aside>
            <div className="col-md-12 guide-body">
              {
                guide.intro_video &&
                <div className="embed">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={guide.intro_video} allowFullScreen></iframe>
                  </div>
                </div>
              }
              <div className="" dangerouslySetInnerHTML={{__html: sanitizeHtml(guide.body)}} />
              <SocialLinks {...shareProps} />
              <div className="col-md-12 next-prev-links">
                <div className="col-md-5 text-md-right">
                  <p>Previous:</p>
                  <a href={guide.prev_post.link}>{`<< ${guide.prev_post.title}`}</a>
                </div>
                <div className="col-md-5 offset-md-2 text-xs-right text-md-left">
                  <p>Next:</p>
                  <a href={guide.next_post.link}>{`${guide.next_post.title} >>`}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

FacilitatorGuidePage.propTypes = {
  guide: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    guide: guideData
  };
}

export default DocumentTitle('Facilitor Guide')(connect(
  mapStateToProps,
  null
)(FacilitatorGuidePage));
