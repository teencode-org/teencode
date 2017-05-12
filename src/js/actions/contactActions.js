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
    const {isValid, concatenatedErrors} = validator.validate(data);

    dispatch(callSendContactActions.request(data))
    if (isValid) {
      return webAPI('/inquiries', 'POST', data)
        .then(response => {
          if (response.errors) {
            dispatch(callSendContactActions.fail(response.errors))
            dispatch(receiveError('Something prevented your message from submitting successfully. Please try again later.', 'contact'))
          } else {
            dispatch(callSendContactActions.receive(response))
          }
        })
        .catch(errors => {
          dispatch(callSendContactActions.fail(errors))
          dispatch(receiveError('Something prevented your message from submitting successfully. Please try again later.', 'contact'))
        });
    } else {
      dispatch(callSendContactActions.fail(concatenatedErrors))
      dispatch(receiveError(concatenatedErrors, 'contact'))
    }
  }
}

