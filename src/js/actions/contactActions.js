import { contactActionTypes } from "../constants/actionTypes"
import webAPI from '../utils/webAPI'
import validator from '../utils/validator';
import { dispatchError } from './errorActions'

export const contactActions = () => {
    return {
        request: (data) => {
            return {
                type: contactActionTypes.REQUEST_SEND_FEEDBACK,
                payload: data
            }
        },
        receive: (data) => {
            return {
                type: contactActionTypes.RECEIVE_SEND_FEEDBACK,
                payload: { receivedAt: new Date() }
            }
        },
        fail: (errors) => {
            return {
                type: contactActionTypes.FAIL_SEND_FEEDBACK,
                payload: { errors, receivedAt: new Date() }
            }
        }
    }
}

export const sendFeedback = (data) => {
  let actions = contactActions()
  return function(dispatch) {
      dispatch(actions.request(data))
      const {isValid, concatenatedErrors} = validator.validate(data);
      if (isValid) {
        // TODO: Use contact us endpoint.
        // TODO: Use this error message on server error: Something prevented your message from submitting successfully. Please try again later.'
        return new Promise(function(resolve) {
          resolve(dispatch(actions.receive(data)));
        });
      } else {
        dispatch(actions.fail(concatenatedErrors))
      }
  }
}

