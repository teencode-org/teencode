import { applicationActionTypes } from '../constants/actionTypes';

export default function(state = {}, action) {
  switch(action.type) {
    case applicationActionTypes.RECEIVE_SEND_APPLICATION:
      return sendApplication(state, action.payload);
    case applicationActionTypes.FAIL_SEND_APPLICATION:
      return receiveError(action.payload);
    default:
      return state;
  }
}

const sendApplication = (state, payload) => {
  return Object.assign({}, state, {
    sent: true
  });
}

const receiveError = (payload) => {
  return Object.assign({}, {
    errors: payload.errors
  });
}
