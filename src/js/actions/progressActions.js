import actionTypes from '../constants/actionTypes';
import { handleApiCall, baseActions } from './helpers';

export const getCountries = () => {
  let actions = baseActions({
    requestType: actionTypes.REQUEST_GET_COUNTRIES,
    receiveType: actionTypes.RECEIVE_GET_COUNTRIES,
    failType: actionTypes.FAIL_GET_COUNTRIES
  });
  
  return handleApiCall({
    actions,
    errorMessage: 'An error occurred while trying to load the countries',
    caller: 'progress',
    route: '/curriculum_sessions',
    requestMethod: 'GET'
  });
}

