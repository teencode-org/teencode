import actionTypes from '../constants/actionTypes';


export default (state = {}, action) => {
  switch(action.type) {
    case actionTypes.REQUEST_GET_PROGRESSES:
      return requestToGetProgresses(state, action.payload);
    case actionTypes.RECEIVE_GET_PROGRESSES:
      return getProgresses(state, action.payload);
    case actionTypes.FAIL_GET_PROGRESSES:
      return progressesNotReceived();
    default:
      return state;
  }
}

const requestToGetProgresses = (state, payload) => {
  return Object.assign({}, state, {
    isFetching: true
  });
}

const getProgresses = (state, payload) => {
  return Object.assign({}, state, {
    progressData: payload.data.progress,
    hasBeenFetched: true
  });
}

const progressesNotReceived = () => {
  return Object.assign({}, {
    hasBeenFetched: false
  });
}
