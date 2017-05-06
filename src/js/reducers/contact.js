import { contactActionTypes } from '../constants/actionTypes';

export default function(state = {}, action) {
  switch(action.type) {
    case contactActionTypes.REQUEST_SEND_FEEDBACK:
      return requestToSendContact(state, action.payload);
    case contactActionTypes.RECEIVE_SEND_FEEDBACK:
      return sendContact(state, action.payload);
    case contactActionTypes.FAIL_SEND_FEEDBACK:
      return receiveError(action.payload);
    default:
      return state;
  }
}

const requestToSendContact = (state, payload) => {
  return Object.assign({}, state, {
    sent: false
  });
}

const sendContact = (state, payload) => {
  return Object.assign({}, state, {
    sent: true
  });
}

const receiveError = (payload) => {
  return Object.assign({}, {
    sent: false,
    errors: payload.errors
  });
}
