import actionTypes from '../constants/actionTypes';

export default (state = {}, action) => {
  switch(action.type) {
    case actionTypes.REQUEST_SUMMER_CLUB_APPLICATION:
      return start(state, action.payload);
    case actionTypes.RECEIVE_SUMMER_CLUB_APPLICATION:
      return success(state, action.payload);
    case actionTypes.FAIL_SUMMER_CLUB_APPLICATION:
      return failure();
    default:
      return state;
  }
}

const start = (state, payload) => {
  return Object.assign({}, state, {
    isSending: true
  });
}

const success = (state, payload) => {
  return Object.assign({}, state, {
    hasBeenSent: true
  });
}

const failure = () => {
  return Object.assign({}, {
    hasBeenSent: false
  });
}
