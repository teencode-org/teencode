import React, { Component } from 'react';
import BlogHeader from './BlogHeader';
import BlogList from './BlogList';
import { getFeaturedBlogs } from '../../actions/blogActions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Blog extends Component {
  componentWillMount() {
    this.props.getFeaturedBlogs()
  }

  componentDidMount() {
    window.scrollTo(0, 0)
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

Blog.propTypes = {
  featured: PropTypes.array,
  getFeaturedBlogs: PropTypes.func
}

export default connect(stateToProps, mapDispatchToProps)(Blog);
