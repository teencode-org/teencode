import React, { Component, PropTypes } from 'react';
import BlogListArticle from './BlogListArticle';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBlogs } from '../../actions/blogActions';
import LoadMore from './LoadMore';

class BlogList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      blogs: [],
      page_data: {}
    }
  }

  componentWillMount() {
    this.props.getBlogs().then(() => {
      this.setState(Object.assign({}, this.state, this.props.blog.blogs));
    });
  }

  displayBlogs = () => {
    return this.state.blogs.map((post, index) => (
      <BlogListArticle key={index}
                        id={post.id}
                        imageUrl={post.featured_image_url ?
                                    post.featured_image_url :
                                    "http://via.placeholder.com/300x300"}
                        title={post.title}
                        author={`by ${post.author.name}`}
                        summary={post.story.substring(0, 250) + "..."} />
    ));
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
    this.props.getBlogs({}, this.state.page_data.current_page + 1).then(() => {
      if(this.moreArticlesAvailable()) {
        const updatedState = [].concat(this.state.blogs).concat(this.props.blog.blogs);
        this.setState({ page_data: this.props.blog.page_data, blogs: updatedState });
      }
    })
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