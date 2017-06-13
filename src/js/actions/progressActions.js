import actionTypes from '../constants/actionTypes';
import { handleApiCall, baseActions } from './helpers';

export const getProgresses = () => {
  let actions = baseActions({
    requestType: actionTypes.REQUEST_GET_PROGRESSES,
    receiveType: actionTypes.RECEIVE_GET_PROGRESSES,
    failType: actionTypes.FAIL_GET_PROGRESSES
  });
  
  return handleApiCall({
    actions,
    caller: 'progress',
    route: '/progresses',
    requestMethod: 'GET'
  });
}
