import React from 'react'
import CurriculumTableContainer from './CurriculumTable';
import DocumentTitle from '../common/DocumentTitle';
import dummyData from './guideDummyData';
import jquery from 'jquery';
import { sanitizeHtml, joinHtmlItemsWithCommaWithAnd } from '../../utils/helpers';
import SocialLinks from '../common/SocialLinks';

export class FacilitatorGuidePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLinkIndex: 0
    };

    this.goToSection = this.goToSection.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  goToSection(event) {
    let targetIndex = event.currentTarget.getAttribute('data-target');
    this.setState({selectedLinkIndex: targetIndex - 1})
    jquery('html, body').stop().animate({
        scrollTop: (jquery(`.guide-body h2:nth-of-type(${targetIndex})`).offset().top - 70)
    }, 500);
    event.preventDefault();
  }

  getTocLinks() {
    const tmpDiv = document.createElement('div');
    tmpDiv.innerHTML = dummyData[0].body;
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
    const shareProps = {
      url: window.location.href,
      title: dummyData[0].title || '',
      imageUrl: '',
      description: ''
    };

    return (
      <section className="facilitor-guide">
        <div className="header-content">
          <div className="row">
            <div className="col-md-12">
              <h3>{dummyData[0].title}</h3>
              <div className="col-xs-6 text-sm-right header-content-titles">
                <p>Level</p>
                <p>Session</p>
                <p>Authors</p>
              </div>
              <div className="col-xs-6 header-content-body">
                <p>{dummyData[0].level}</p>
                <p>{dummyData[0].session}</p>
                <p dangerouslySetInnerHTML={{__html: sanitizeHtml(joinHtmlItemsWithCommaWithAnd(dummyData[0].authors.map(author => author.full_name)))}} />
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
                dummyData[0].intro_video &&
                <div className="embed">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={dummyData[0].intro_video} allowFullScreen></iframe>
                  </div>
                </div>
              }
              <div className="" dangerouslySetInnerHTML={{__html: sanitizeHtml(dummyData[0].body)}} />
              <SocialLinks {...shareProps} />
              <div className="col-md-12 next-prev-links">
                <div className="col-md-5 text-md-right">
                  <p>Previous:</p>
                  <a href={dummyData[0].prev_post.link}>{`<< ${dummyData[0].prev_post.title}`}</a>
                </div>
                <div className="col-md-5 offset-md-2 text-xs-right text-md-left">
                  <p>Next:</p>
                  <a href={dummyData[0].next_post.link}>{`${dummyData[0].next_post.title} >>`}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default DocumentTitle('Facilitor Guide')(FacilitatorGuidePage);
