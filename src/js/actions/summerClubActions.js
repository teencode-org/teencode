import actionTypes from '../constants/actionTypes';
import { handleApiCall, baseActions } from './helpers';

export const summerClubApplication = (data) => {
  let actions = baseActions({
    requestType: actionTypes.REQUEST_SUMMER_CLUB_APPLICATION,
    receiveType: actionTypes.RECEIVE_SUMMER_CLUB_APPLICATION,
    failType: actionTypes.FAIL_SUMMER_CLUB_APPLICATION
  });

  return handleApiCall({
    actions,
    data,
    errorMessage: 'There was a problem submitting your application your file. Please try again.',
    caller: 'summer-club',
    route: '/summer-club/apply',
    requestMethod: 'POST'
  });
}
