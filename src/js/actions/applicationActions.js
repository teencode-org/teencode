import actionTypes from "../constants/actionTypes"
import webAPI from '../utils/webAPI'
import validator from '../utils/validator'
import { receiveError } from './errorActions'

export const applyActions = () => {
  return {
    request: (data) => {
      return {
        type: actionTypes.REQUEST_SEND_APPLICATION,
        payload: { data }
      }
    },
    receive: (data) => {
      return {
        type: actionTypes.RECEIVE_SEND_APPLICATION,
        payload: { receivedAt: new Date() }
      }
    },
    fail: (errors) => {
      return {
        type: actionTypes.FAIL_SEND_APPLICATION,
        payload: { receivedAt: new Date() }
      }
    }
  }
}

export const apply = (data) => {
  let callApplyActions = applyActions()
  return function(dispatch) {
    const {isValid, concatenatedErrors} = validator.validate(data);
    
    dispatch(callApplyActions.request(data))
    if (isValid) {
    return webAPI('/applicants', 'POST', data)
      .then(response => {
        if (response.errors) {
          dispatch(callApplyActions.fail(response.errors))
          dispatch(receiveError('An error occurred. Please try again later.', 'application'))
        } else {
          dispatch(callApplyActions.receive(response))
        }
      })
      .catch(errors => {
        dispatch(callApplyActions.fail(errors))
        dispatch(receiveError('An error occurred. Please try again later.', 'application'))
      });
    } else {
      dispatch(callApplyActions.fail(concatenatedErrors))
      dispatch(receiveError(concatenatedErrors, 'application'))
    }
  }
}
