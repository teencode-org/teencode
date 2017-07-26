import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBlogArticle } from '../../actions/blogArticleActions';
import SocialLinks from './SocialLinks';
import InlineLoader from '../common/InlineLoader';
import NotFoundPage from '../not_found/notFound';
import defaultBlogImage from '../../../img/teencode_maryleaks_small.jpeg';

class BlogArticle extends React.Component {
  componentDidMount () {
    this.props.getBlogArticle(this.props.params.id)
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

  render() {
    const blog = this.props.blog;
    const article = blog.article;
    
    if ( blog.error ) {
      return (
      <div className="blog-full-article"><NotFoundPage /></div>
      );
    }

    if ( blog.isFetching || !blog.hasBeenFetched ) {
      return <div className="blog-full-article"><InlineLoader /></div>;
    }

    return (
    <div className="row blog-full-article">
      <h2 className="article-title">{article.title}</h2>
      <div className="blog-article-author">
        <img src={article.author.profile_image_url || 'http://via.placeholder.com/300x300?text=author'} />
        <div>
          <p className="article-author">{article.author.name || ''}</p>
          {article.author.tagline && <p className="article-tagline">{article.author.tagline}</p>}
        </div>
      </div>
      <img className="article-image" src={article.featured_image_url || defaultBlogImage} />
      <SocialLinks />
      <div className="article-body" ref={this.setArticleBody} />
      <SocialLinks />
      <div className="suggested-reading">
        <h2>Suggested Reads</h2>
        {this.props.blog.blogs.map((blogPost, index) => (
          <div
            key={`suggested-${index}`} 
            style={{ background: `url(${blogPost.featured_image_url}) no-repeat` }}
            className="col-md-5"
          >
            <h4>{blogPost.title}</h4>
            <p>by {blogPost.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
  }
}

BlogArticle.propTypes = {
  params: PropTypes.object,
  blog: PropTypes.object,
  getBlogArticle: PropTypes.func
}

const stateToProps = (store) => ({
     blog: store.blog
});

const mapDispatchToProps = (dispatch) => bindActionCreators({getBlogArticle}, dispatch);
 
export default connect(stateToProps, mapDispatchToProps)(BlogArticle);
