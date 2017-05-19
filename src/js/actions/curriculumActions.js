import actionTypes from '../constants/actionTypes';
import { handleApiCall, baseActions } from './helpers';

export const getCurriculum = () => {
  let actions = baseActions({
    requestType: actionTypes.REQUEST_GET_CURRICULUM,
    receiveType: actionTypes.RECEIVE_GET_CURRICULUM,
    failType: actionTypes.FAIL_GET_CURRICULUM
  });
  
  return handleApiCall({
    actions,
    errorMessage: 'An error occurred while trying to load the curriculum',
    caller: 'curriculum',
    route: '/curriculum_sessions',
    requestMethod: 'GET'
  });
}

