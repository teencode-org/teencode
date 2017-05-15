import actionTypes from '../constants/actionTypes';
import { handleApiCall, baseActions } from './helpers';

export const sendFeedback = (data) => {
  let actions = baseActions({
    requestType: actionTypes.REQUEST_SEND_FEEDBACK,
    receiveType: actionTypes.RECEIVE_SEND_FEEDBACK,
    failType: actionTypes.FAIL_SEND_FEEDBACK
  });
  
  return handleApiCall({
    actions,
    data,
    errorMessage: 'Something prevented your message from submitting successfully. Please try again later.',
    caller: 'contact',
    route: '/inquiries',
    requestMethod: 'POST'
  });
}

