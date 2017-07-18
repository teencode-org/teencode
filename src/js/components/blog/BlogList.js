import React, { Component } from 'react';
import BlogListArticle from './BlogListArticle';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBlogs } from '../../actions/blogActions';
import Waypoint from 'react-waypoint';

class BlogList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      blogs: [],
      page_data: {}
    }

    this.displayBlogs = this.displayBlogs.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  componentWillMount() {
    this.props.getBlogs().then(() => {
      this.setState(Object.assign({}, this.state, this.props.blog.blogs));
    });
  }

  displayBlogs() {
    return this.state.blogs.map((post, index) => (<BlogListArticle key={index}
        imageUrl={post.image_url ? post.image_url : "http://via.placeholder.com/300x300"}
        title={post.title}
        author={`by ${post.author.name}`}
        summary={post.story.substring(0, 250) + "..."}
      />
    ));
  }

  loadMore() {
    this.props.getBlogs({}, this.state.page_data.current_page + 1).then(() => {
      if(Array.isArray(this.props.blog.blogs.blogs)) {
        const updatedState = [].concat(this.state.blogs).concat(this.props.blog.blogs.blogs);
        this.setState({ page_data: this.props.blog.blogs.page_data, blogs: updatedState });
      }
    })
  }

  noBlogs() {
    return <div id='no-blog-wrapper'><h1>No Content</h1></div>;
  }

  render() {
    return (
      <div className="container">
        <div className="blog-list">
          <h3>Top articles</h3>
          {this.state.blogs.length > 0 ? this.displayBlogs() : this.noBlogs()}
        </div>

        <div className="load-more-container">
          <Waypoint onEnter={this.loadMore} />
          <i className="fa fa-refresh" />
          <p>Going to classrooms to fetch more articles ...</p>
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
    getBlogs
  }, dispatch)
}


export default connect(stateToProps, mapDispatchToProps)(BlogList);