import actionTypes from '../constants/actionTypes';

export default function(state = initialState, action) {
  switch(action.type) {
    case actionTypes.REQUEST_GET_BLOG:
    case actionTypes.REQUEST_GET_BLOG_ARTICLES:
    case actionTypes.REQUEST_GET_FEATURED_ARTICLES:
      return requestToGetBlogs(state, action.payload);
    case actionTypes.RECEIVE_GET_BLOG:
      return getBlog(state, action.payload);
    case actionTypes.RECEIVE_GET_BLOG_ARTICLE:
      return getBlogArticle(state, action.payload);
    case actionTypes.RECEIVE_GET_FEATURED_ARTICLES:
      return getFeaturedBlog(state, action.payload);
    case actionTypes.FAIL_GET_BLOG:
    case actionTypes.FAIL_GET_BLOG_ARTICLE:
    case actionTypes.FAIL_GET_FEATURED_ARTICLES:
      return blogNotReceived(action.payload);
    default:
      return state;
  }
}

const initialState = {
  isFetching: false,
  hasBeenFetched: false,
  featured: [],
  blogs: [],
  article: {}
}

const requestToGetBlogs = (state, payload) => {
  return Object.assign({}, state, {
    isFetching: true
  });
}

const getBlog = (state, payload) => {
  return Object.assign({}, state, payload.data, {
    hasBeenFetched: true,
    isFetching: false
  });
}

const getBlogArticle = (state, payload) => {
  return Object.assign({}, state, {
    article: payload.data.blog,
    isFetching: false,
    hasBeenFetched: true
  });
}

const blogNotReceived = (payload) => {
  return Object.assign({}, {
    error: payload.errors.message,
    hasBeenFetched: false
  });
}

const getFeaturedBlog = (state, payload) => {
  return Object.assign({}, state, {
    featured: payload.data.blogs
  });
}
