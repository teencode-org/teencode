import React, { Component } from 'react';
import BlogHeader from './BlogHeader';
import BlogList from './BlogList';
import { getFeaturedBlogs } from '../../actions/blogActions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Blog extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentWillMount() {
    this.props.getFeaturedBlogs()
  }

  render() {
    return (
      <div>
        {!!this.props.featured.length && <BlogHeader {...this.props} />}
        <BlogList />
      </div>
    );
  }
}

const stateToProps = (store) => {
  return {
    featured: store.blog.featured
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getFeaturedBlogs
  }, dispatch)
}


export default connect(stateToProps, mapDispatchToProps)(Blog);
