import actionTypes from "../constants/actionTypes"
import webAPI from '../utils/webAPI'
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
  let actions = applyActions()
  return function(dispatch) {
    dispatch(actions.request(data))
    return webAPI('/inquiries', 'POST', data)
      .then(response => {
        dispatch(actions.receive(response))
        if (response.errors) {
          dispatch(actions.fail(response.errors))
          dispatch(receiveError('An error occurred. Please try again later', 'application'))
        }
      })
      .catch(errors => {
        dispatch(actions.fail(errors))
        dispatch(receiveError('An error occurred. Please try again later', 'application'))
      });
  }
}

