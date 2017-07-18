import actionTypes from '../constants/actionTypes';

export default function(state = [], action) {
  switch(action.type) {
    case actionTypes.REQUEST_GET_BLOG:
      return requestToGetBlogs(state, action.payload);
    case actionTypes.RECEIVE_GET_BLOG:
      return getBlog(state, action.payload);
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
  return Object.assign({}, state, {
    blogs: payload.data,
    hasBeenFetched: true
  });
}

const blogNotReceived = () => {
  return Object.assign({}, {
    hasBeenFetched: false
  });
}
