import actionTypes from '../constants/actionTypes';

export default function(state = initialState, action) {
  switch(action.type) {
    case actionTypes.REQUEST_GET_BLOG:
      return requestToGetBlogs(state, action.payload);
    case actionTypes.RECEIVE_GET_BLOG:
      return getBlog(state, action.payload);
    case actionTypes.RECEIVE_GET_BLOG_ARTICLE:
      return getBlogArticle(state, action.payload);
    case actionTypes.FAIL_GET_BLOG:
      return blogNotReceived(action.payload);
    default:
      return state;
  }
}

const initialState = {
  isFetching: false,
  hasBeenFetched: false,
  blogs: [],
  article: { }
}

const requestToGetBlogs = (state, payload) => {
  return Object.assign({}, state, {
    isFetching: true
  });
}

const getBlog = (state, payload) => {
  return Object.assign({}, state, {
    blogs: payload.data,
    hasBeenFetched: true
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
