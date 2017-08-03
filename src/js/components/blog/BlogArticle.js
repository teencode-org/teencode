import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBlogs } from '../../actions/blogActions';
import { getBlogArticle } from '../../actions/blogArticleActions';
import SocialLinks from './SocialLinks';
import Loader from '../common/Loader';
import NotFoundPage from '../not_found/notFound';
import defaultBlogImage from '../../../img/teencode_maryleaks_small.jpeg';

class BlogArticle extends React.Component {
  componentDidMount () {
    this.props.getBlogArticle(this.props.params.id)
    if (this.props.blog.blogs.length < 1) {
      this.props.getBlogs();
    }
  }
  componentDidUpdate(nextProps) {
    const articleStory = this.props.blog.article.story;
    if (articleStory) {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(articleStory, "text/html");
      this.articleBody.innerHTML = htmlDoc.body.innerHTML;
    }
  }

  setArticleBody = (articleBody) => {
    this.articleBody = articleBody;
  }

  randomSuggested = () => {
    const blogList = this.props.blog.blogs;
    const blogListLength = this.props.blog.blogs.length;
    if (blogListLength < 1) return [];
    const randomBlog1 = blogList[Math.floor(Math.random() * blogListLength)];
    const randomBlog2 = blogList[Math.floor(Math.random() * blogListLength)];
    return [randomBlog1, randomBlog2];
  }

  render() {
    const blog = this.props.blog;
    const article = blog.article;
    const suggestedBlogs = this.randomSuggested();
    
    if ( blog.error ) {
      return (
      <div className="blog-full-article"><NotFoundPage /></div>
      );
    }

    if ( blog.isFetching || !blog.hasBeenFetched ) {
      return <div className="blog-full-article"><Loader /></div>;
    }

    return (
      <div className="blog-full-article page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="article-title hidden-sm-down">{article.title}</h2>
              <div className="blog-article-author">
                <img src={article.author.profile_image_url || 'http://via.placeholder.com/300x300?text=author'} />
                <p className="article-author">{article.author.name || ''}</p>
                <p className="article-tagline">{article.author.tagline}</p>
              </div>
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
              <SocialLinks />
              <div className="article-body" ref={this.setArticleBody} />
              <SocialLinks />
              <div className="suggested-reading row">
                <div className="col-md-12">
                  <h2 className="suggested-reading-title">Suggested Reads</h2>
                </div>
                {suggestedBlogs.map((blogPost, index) => (
                  <div
                    key={`suggested-${index}`}
                    className="col-md-6 col-sm-12"
                  >
                    <div
                      className="suggested-reading-link"
                      style={{ background: `url(${blogPost.featured_image_url || defaultBlogImage}) no-repeat` }}
                    >
                      <h4 className="suggested-reading-name hidden-sm-down">{blogPost.title}</h4>
                    </div>
                    <div className="suggested-reading-link-sm hidden-md-up">
                      <h4 className="suggested-reading-name-sm">{blogPost.title}</h4>
                      <p className="suggested-reading-author">by {blogPost.author.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
  }
}

BlogArticle.propTypes = {
  params: PropTypes.object,
  blog: PropTypes.object,
  getBlogs: PropTypes.func,
  getBlogArticle: PropTypes.func
}

const stateToProps = (store) => ({
     blog: store.blog
});

const mapDispatchToProps = (dispatch) => bindActionCreators({getBlogArticle, getBlogs}, dispatch);
 
export default connect(stateToProps, mapDispatchToProps)(BlogArticle);
