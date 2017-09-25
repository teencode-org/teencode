import React, { PropTypes } from 'react'
import DocumentTitle from '../../common/DocumentTitle';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import jquery from 'jquery';
import { sanitizeHtml, joinHtmlItemsWithCommaWithAnd } from '../../../utils/helpers';
import SocialLinks from '../../common/SocialLinks';
import { addClass, removeClass } from 'Utils/helpers';
import Loader from '../../common/Loader';
import TocLinks from './TocLinks';

export class FacilitatorTemplate extends React.Component {
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
    const footer = event.target.querySelector('footer');
    const sections = event.target.querySelectorAll('.content-body h2');
    const contentLinks = event.target.querySelector('.links');
    const headerHeight = header.clientHeight;
    const scrollTop = document.body.scrollTop;

    const footerTop = footer.getBoundingClientRect().top + window.scrollY;
    const heightToStartOfFooter = footerTop - window.innerHeight;

    if (scrollTop < headerHeight - 150) {
      removeClass(header, 'short-header');
    } else {
      addClass(header, 'short-header');
      if (scrollTop < heightToStartOfFooter) {
        addClass(contentLinks, 'affixed-content-links');
      } else {
        removeClass(contentLinks, 'affixed-content-links');
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
        scrollTop: (jquery(`.content-body h2:nth-of-type(${targetIndex})`).offset().top - 170)
    }, 500, function() {
      this.setState({selectedLinkIndex: targetIndex - 1});
    }.bind(this));
    event.preventDefault();
  }

  render () {
    const { content } = this.props;
    const shareProps = {
      url: window.location.href,
      title: content.title || '',
      imageUrl: '',
      description: ''
    };

    return (
      <section className="facilitor-content">
        <div className="header-content">
          <div className="row">
            <div className="col-md-12">
              <h3>{content.title}</h3>
              <div className="col-xs-6 text-sm-right header-content-titles">
                <p>Level</p>
                <p>Session</p>
                <p>Authors</p>
              </div>
              <div className="col-xs-6 header-content-body">
                <p>{content.level}</p>
                <p>{content.session}</p>
                <p dangerouslySetInnerHTML={{__html: sanitizeHtml(joinHtmlItemsWithCommaWithAnd(content.authors.map(author => author.full_name)))}} />
              </div>
            </div>
          </div>
        </div>
        <div className="container main-content">
          <div className="row">
            <aside className="col-md-4 hidden-sm-down content-links">
              <div className="affixed-content-links links">
                <TocLinks selectedLinkIndex={this.state.selectedLinkIndex} body={content.body} onClick={this.goToSection} />
              </div>
            </aside>
            <div className="col-md-8 content-body">
              {
                content.intro_video &&
                <div className="embed">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={content.intro_video.replace("watch?v=", "embed/")} allowFullScreen></iframe>
                  </div>
                </div>
              }
              <div className="" dangerouslySetInnerHTML={{__html: sanitizeHtml(content.body)}} />
              <SocialLinks {...shareProps} />
              <div className="col-md-12 next-prev-links">
                <div className="col-md-5 text-md-right">
                  <p>Previous:</p>
                  <a href={content.prev_post.link}>{`<< ${content.prev_post.title}`}</a>
                </div>
                <div className="col-md-5 offset-md-2 text-xs-right text-md-left">
                  <p>Next:</p>
                  <a href={content.next_post.link}>{`${content.next_post.title} >>`}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

FacilitatorTemplate.propTypes = {
  content: PropTypes.object.isRequired
};

export default FacilitatorTemplate;
