import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { getFeaturedBlogs, getBlogArticle } from '../../actions/blogActions';
import SocialLinks from './SocialLinks';
import ArticleThread from './ArticleThread';
import Loader from '../common/Loader';
import NotFoundPage from '../not_found/notFound';
import { parseBlogTitle } from '../../utils/parseBlogTitle';
import defaultBlogImage from '../../../img/teencode_maryleaks_small.jpeg';


class BlogArticle extends Component {
  componentWillMount() {
    this.initComponent(this.props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.id == nextProps.params.id) return;
    this.initComponent(nextProps);
    window.scrollTo(0, 0);
  }

  componentDidUpdate(nextProps) {
    const articleStory = this.props.blog.article.story;
    if (articleStory) {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(articleStory, "text/html");
      this.articleBody.innerHTML = htmlDoc.body.innerHTML;
    }
  }

  initComponent(props) {
    props.getFeaturedBlogs();
    props.getBlogArticle(props.params.id);
  }

  setArticleBody = (articleBody) => {
    this.articleBody = articleBody;
  }

  getRandomId = (limit, currentId, alreadySelectedId) => {
    let rand = currentId
    while(rand == currentId || rand == alreadySelectedId) {
      rand = Math.floor(Math.random() * limit)
    }
    return rand;
  }

  randomSuggested = () => {
    const blogList = this.props.blog.featured;
    if (blogList.length < 1) return [];
    const randomBlog1 = blogList[this.getRandomId(blogList.length, this.props.params.id)];
    const randomBlog2 = blogList[this.getRandomId(blogList.length, this.props.params.id, randomBlog1.id)];

    return [randomBlog1, randomBlog2];
  }

  render() {
    const blog = this.props.blog;
    const article = blog.article;
    const suggestedBlogs = this.randomSuggested();
    const shareProps = {
      url: window.location.href,
      title: article.title || 'Teencode blog',
      imageUrl: article.featured_image_url || defaultBlogImage,
      description: article.description || 'A blog article published by teencode'
    };

    if ( blog.error ) {
      return (
      <div className="blog-full-article"><NotFoundPage /></div>
      );
    }

    if ( !blog.hasBeenFetched ) {
      return <div className="blog-full-article"><Loader /></div>;
    }

    return (
      <div className="blog-full-article page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="article-title hidden-sm-down">{article.title}</h2>
              {article.author && <div className="blog-article-author">
                <img src={article.author.profile_image_url || 'http://via.placeholder.com/300x300?text=author'} />
                <p className="article-author">{article.author.name || ''}</p>
                {article.author.tagline && <p className="article-tagline">{article.author.tagline}</p>}
              </div>}
            </div>
          </div>
        </div>
        <div className="article-image-container">
          <img className="article-image" src={article.featured_image_url || defaultBlogImage} />
          <div className="article-title-sm hidden-md-up">{article.title}</div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SocialLinks {...shareProps} />
              <div className="article-body" ref={this.setArticleBody} />
              <SocialLinks {...shareProps} style={{ textAlign: 'left' }} />
              <div className="suggested-reading row">
                <div className="col-md-12">
                  <h2 className="suggested-reading-title">Suggested Reads</h2>
                </div>
                {suggestedBlogs.map((blogPost, index) => (
                  <Link 
                    key={`suggested-${index}`}
                    to={`/blog/${blogPost.id}/${parseBlogTitle(blogPost.title)}`}
                  >
                    <div className="col-md-6 col-sm-12">
                      <div
                        className="suggested-reading-link"
                        style={{ background: `url(${blogPost.featured_image_url || defaultBlogImage})` }}
                      >
                        <div className="suggested-reading-overlay hidden-sm-down">
                          <h4 className="suggested-reading-name">{blogPost.title}</h4>
                        </div>
                      </div>
                      <div className="suggested-reading-link-sm hidden-md-up">
                        <h4 className="suggested-reading-name-sm">{blogPost.title}</h4>
                        <p className="suggested-reading-author">by {blogPost.author.name}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="article-thread">
                <ArticleThread
                  articleId={this.props.params.id}
                  articleTitle={article.title}
                  shortName={process.env.DISQUS_SHORT_NAME}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="article-thread">
          <ArticleThread
            articleId={this.props.params.id}
            articleTitle={article.title}
            shortName={process.env.DISQUS_SHORT_NAME}
          />
        </div>
      </div>
    );
  }
}

const stateToProps = (store) => {
  return {
    blog: store.blog
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getFeaturedBlogs, getBlogArticle
  }, dispatch)
}

BlogArticle.propTypes = {
params: PropTypes.object.isRequired,
blog: PropTypes.object,
getFeaturedBlogs: PropTypes.func,
getBlogArticle: PropTypes.func
}

export default connect(stateToProps, mapDispatchToProps)(BlogArticle);
