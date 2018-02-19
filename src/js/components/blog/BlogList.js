import React, { Component, PropTypes } from 'react';
import BlogListArticle from './BlogListArticle';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBlogs } from 'Actions/blogActions';
import LoadMore from './LoadMore';
import config from '../../config/';
import { stripHtmlTags } from 'Utils/helpers';

class BlogList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      blogs: [],
      page_data: {}
    }
    this.isFetching = false;
  }

  componentWillMount() {
    this.getBlogs();
  }

  getBlogs = () => {
    this.isFetching = true;
    this.props.getBlogs({}, this.state.page_data.current_page + 1).then(({ blogs, page_data }) => {
      if(!blogs || page_data.current_page === this.state.page_data.current_page) return;
      this.isFetching = false;
      this.setState({ page_data, blogs: [...this.state.blogs, ...blogs] });
    })
  }

  displayBlogs = () => {
    return this.state.blogs.map((post, index) => {
      if (post.published) {
        return (<BlogListArticle key={index}
                          id={post.id}
                          imageUrl={post.featured_image_url ?
                                      post.featured_image_url :
                                      "http://via.placeholder.com/300x300"}
                          title={post.title}
                          author={`by ${post.author.name}`}
                          summary={stripHtmlTags(post.story).substring(0, config.SUMMARY_LENGTH) + "..."} />)
      }
  });
  }

  moreArticlesAvailable() {
    try {
      return !!this.props.blog.blogs.length
    } catch(e) {
      return false;
    }
  }

  articlesAvailable() {
    return !!this.state.blogs.length
  }

  loadMore = () => {
    if (!this.moreArticlesAvailable()) return;
    this.getBlogs();
  }

  noBlogs() {
    if(this.props.blog.isFetching) {
      return (
        <div id="no-blog-wrapper">
           <h1><i className="fa fa-refresh fa-spin" /></h1>
         </div>
      )
    }
    {/*return <div id='no-blog-wrapper'><h1>No Content</h1></div>;*/}
  }

  render() {
    return (
      <div className="container">
        <div className="blog-list">
          {this.articlesAvailable() && <h3>Top articles</h3>}
          {this.articlesAvailable() ? this.displayBlogs() : this.noBlogs()}
        </div>

        {this.moreArticlesAvailable() && <LoadMore onLoad={this.loadMore} />}
      </div>
    );
  }
}

BlogList.propTypes = {
  blog: PropTypes.object,
  getBlogs: PropTypes.func

}

const stateToProps = (store) => {
  return {
    blog: store.blog
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getBlogs
  }, dispatch)
}


export default connect(stateToProps, mapDispatchToProps)(BlogList);