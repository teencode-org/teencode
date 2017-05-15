import actionTypes from '../constants/actionTypes';

export default function(state = {}, action) {
  switch(action.type) {
    case actionTypes.REQUEST_SEND_FEEDBACK:
      return requestToSendContact(state, action.payload);
    case actionTypes.RECEIVE_SEND_FEEDBACK:
      return sendContact(state, action.payload);
    case actionTypes.FAIL_SEND_FEEDBACK:
      return contactNotSent();
    default:
      return state;
  }
}

const requestToSendContact = (state, payload) => {
  return Object.assign({}, state, {
    isSending: true
  });
}

const sendContact = (state, payload) => {
  return Object.assign({}, state, {
    hasBeenSent: true
  });
}

const contactNotSent = () => {
  return Object.assign({}, {
    hasBeenSent: false
  });
}
