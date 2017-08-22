import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { getBlogs, getBlogArticle } from '../../../actions/blogActions';
import SocialLinks from '../SocialLinks';
import ArticleThread from './ArticleThread';
import ArticleHeader from './ArticleHeader';
import ArticleBanner from './ArticleBanner';
import ArticleBody from './ArticleBody';
import Loader from '../../common/Loader';
import NotFoundPage from 'Components/not_found/notFound';
import { getTwoUniqueIdsFromBlogsArray } from '../../../utils/helpers';
import SuggestedArticle from './SuggestedArticle';
import defaultBlogImage from 'Images/teencode_maryleaks_small.jpeg';

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

  initComponent(props) {
    props.getBlogs();
    props.getBlogArticle(props.params.id);
  }

  randomSuggested = () => {
    const {blogs: blogList} = this.props.blog;
    if (!blogList || blogList.length < 1) return [];
    const listOfIds = blogList.map(({id}) => id)
    const ids = getTwoUniqueIdsFromBlogsArray(listOfIds, [parseInt(this.props.params.id)])
    return blogList.filter(blog => blog.id == ids[0] || blog.id == ids[1])
  }

  render() {
    const {blog} = this.props;

    if (blog.isFetching ) {
      return <div className="blog-full-article"><Loader /></div>;
    }

    if ( blog.error ) {
      return (
        <div className="blog-full-article"><NotFoundPage /></div>
      );
    }

    const article = blog.article;
    const suggestedBlogs = this.randomSuggested();
    const shareProps = {
      url: window.location.href,
      title: article.title || '',
      imageUrl: article.featured_image_url || '',
      description: article.description || ''
    };

    return (
      <div className="blog-full-article page">

        <ArticleHeader {...{article}} />
        <ArticleBanner {...{article, defaultBlogImage}} />

        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <SocialLinks {...shareProps} />

              <ArticleBody {...{article}} />

              <SocialLinks {...shareProps} style={{ textAlign: 'left' }} />

              <div className="suggested-reading row">
                <div className="col-md-12">
                  <h2 className="suggested-reading-title">Suggested Reads</h2>
                </div>
                {suggestedBlogs.map((blogPost, index) => (
                  <SuggestedArticle key={index}  {...{blogPost, index}} />
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
    getBlogs, getBlogArticle
  }, dispatch)
}

BlogArticle.propTypes = {
  params: PropTypes.object.isRequired,
  blog: PropTypes.object,
  getFeaturedBlogs: PropTypes.func,
  getBlogArticle: PropTypes.func
}

export default connect(stateToProps, mapDispatchToProps)(BlogArticle);
