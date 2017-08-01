import actionTypes from '../constants/actionTypes';

let initialState = {
  featured: [],
  blogs: {}
}
export default function(state = initialState, action) {
  switch(action.type) {
    case actionTypes.REQUEST_GET_BLOG:
      return requestToGetBlogs(state, action.payload);
    case actionTypes.RECEIVE_GET_BLOG:
      return getBlog(state, action.payload);
    case actionTypes.RECEIVE_GET_FEATURED_ARTICLES:
      return getFeaturedBlog(state, action.payload);
    case actionTypes.FAIL_GET_BLOG:
      return blogNotReceived();
    default:
      return state;
  }
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

const getFeaturedBlog = (state, payload) => {
  return Object.assign({}, state, {
    featured: payload.data.blogs,
  });
}

const blogNotReceived = () => {
  return Object.assign({}, {
    hasBeenFetched: false,
    isFetching: false
  });
}


