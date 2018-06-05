import actionTypes from '../constants/actionTypes';

export default (state = {}, action) => {
  switch(action.type) {
    case actionTypes.REQUEST_SEND_APPLICATION:
      return requestToSendApplication(state, action.payload);
    case actionTypes.RECEIVE_SEND_APPLICATION:
      return sendApplication(state, action.payload);
    case actionTypes.FAIL_SEND_APPLICATION:
      return applicationNotSent();
    default:
      return state;
  }
}

const requestToSendApplication = (state, payload) => {
  return Object.assign({}, state, {
    isSending: true
  });
}

const sendApplication = (state, payload) => {
  return Object.assign({}, state, {
    hasBeenSent: true
  });
}

const applicationNotSent = () => {
  return Object.assign({}, {
    hasBeenSent: false
  });
}
