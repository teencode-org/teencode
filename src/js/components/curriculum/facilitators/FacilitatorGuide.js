import React, { PropTypes } from 'react'
import DocumentTitle from '../../common/DocumentTitle';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import jquery from 'jquery';
import { sanitizeHtml, joinHtmlItemsWithCommaWithAnd } from '../../../utils/helpers';
import SocialLinks from '../../common/SocialLinks';
import { addClass, removeClass } from 'Utils/helpers';
import { getFacilitatorGuide } from '../../../actions/curriculumActions';
import Loader from '../../common/Loader';
import TocLinks from './TocLinks';

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
    this.props.getFacilitatorGuide()
    window.scrollTo(0, 0);
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const header = event.target.querySelector('.header-content');
    const footer = event.target.querySelector('footer');
    const sections = event.target.querySelectorAll('.guide-body h2');
    const guideLinks = event.target.querySelector('.links');
    const headerHeight = header.clientHeight;
    const scrollTop = document.body.scrollTop;

    const footerTop = footer.getBoundingClientRect().top + window.scrollY;
    const heightToStartOfFooter = footerTop - window.innerHeight;

    if (scrollTop < headerHeight - 150) {
      removeClass(header, 'short-header');
    } else {
      addClass(header, 'short-header');
      if (scrollTop < heightToStartOfFooter) {
        addClass(guideLinks, 'affixed-guide-links');
      } else {
        removeClass(guideLinks, 'affixed-guide-links');
      }
    }

    for (let index = 0; index < sections.length; index++) {
      let sectionPosition = sections[index].offsetTop
      let sectionHeight = sections[index].clientHeight
      if (scrollTop >= sectionPosition - 20) {
        if (this.state.selectedLinkIndex !== index) {
          this.setState({selectedLinkIndex: index});
        }
      }
    }
  }

  goToSection(event) {
    let targetIndex = event.currentTarget.getAttribute('data-target');
    jquery('html, body').stop().animate({
        scrollTop: (jquery(`.guide-body h2:nth-of-type(${targetIndex})`).offset().top - 170)
    }, 500, function() {
      this.setState({selectedLinkIndex: targetIndex - 1});
    }.bind(this));
    event.preventDefault();
  }

  render () {
    const { hasBeenFetched, guide } = this.props.curriculum;
    if (!hasBeenFetched) return <Loader owner="facilitor guide"/>;
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
            <aside className="col-md-4 hidden-sm-down guide-links">
              <div className="affixed-guide-links links">
                <TocLinks selectedLinkIndex={this.state.selectedLinkIndex} body={guide.body} onClick={this.goToSection} />
              </div>
            </aside>
            <div className="col-md-8 guide-body">
              {
                guide.intro_video &&
                <div className="embed">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={guide.intro_video.replace("watch?v=", "embed/")} allowFullScreen></iframe>
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
  getFacilitatorGuide: PropTypes.func.isRequired,
  guide: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    curriculum: state.curriculum
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getFacilitatorGuide
  }, dispatch)
}

export default DocumentTitle('Facilitor Guide')(connect(
  mapStateToProps,
  mapDispatchToProps
)(FacilitatorGuidePage));
