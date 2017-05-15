import actionTypes from '../constants/actionTypes'
import { handleApiCall, baseActions } from './helpers';

export const apply = (data) => {
  let actions = baseActions({
    requestType: actionTypes.RECEIVE_SEND_APPLICATION,
    receiveType: actionTypes.FAIL_SEND_APPLICATION,
    failType: actionTypes.FAIL_SEND_APPLICATION
  });

  return handleApiCall({
    actions,
    data,
    errorMessage: 'An error occurred. Please try again later.',
    caller: 'application',
    route: '/applicants',
    requestMethod: 'POST'
  });
}
