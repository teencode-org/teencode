import actionTypes from "../constants/actionTypes"
import webAPI from '../utils/webAPI'
import validator from '../utils/validator';
import { receiveError } from './errorActions'

export const sendContactActions = () => {
  return {
    request: (data) => {
      return {
        type: actionTypes.REQUEST_SEND_FEEDBACK,
        payload: { data }
      }
    },
    receive: (data) => {
      return {
        type: actionTypes.RECEIVE_SEND_FEEDBACK,
        payload: { receivedAt: new Date() }
      }
    },
    fail: (errors) => {
      return {
        type: actionTypes.FAIL_SEND_FEEDBACK,
        payload: { errors, receivedAt: new Date() }
      }
    }
  }
}

export const sendFeedback = (data) => {
  let callSendContactActions = sendContactActions()
  return function(dispatch) {
    dispatch(callSendContactActions.request(data))
    const {isValid, concatenatedErrors} = validator.validate(data);
    if (isValid) {
      // TODO: Use contact us endpoint.
      // TODO: Use this error message on server error: Something prevented your message from submitting successfully. Please try again later.'
      return new Promise(function(resolve) {
        resolve(dispatch(callSendContactActions.receive(data)));
      });
    } else {
      dispatch(callSendContactActions.fail(concatenatedErrors))
      dispatch(receiveError(concatenatedErrors, 'contact'))
    }
  }
}

