import actionTypes from "../constants/actionTypes"
import webAPI from '../utils/webAPI'
import { receiveError } from './errorActions'

export const getCurriculumActions = () => {
  return {
    request: () => {
      return {
        type: actionTypes.REQUEST_GET_CURRICULUM,
        payload: {}
      }
    },
    receive: (data) => {
      return {
        type: actionTypes.RECEIVE_GET_CURRICULUM,
        payload: { data, receivedAt: new Date() }
      }
    },
    fail: (errors) => {
      return {
        type: actionTypes.FAIL_GET_CURRICULUM,
        payload: { errors, receivedAt: new Date() }
      }
    }
  }
}

export const getCurriculum = () => {
  let actions = getCurriculumActions()
  return function(dispatch) {
    dispatch(actions.request())
    return webAPI('/curriculum_sessions', 'GET')
      .then(response => {
        dispatch(actions.receive(response))
        if (response.errors) {
          dispatch(actions.fail(response.errors))
          dispatch(receiveError('An error occurred while trying to load the curriculum', 'curriculum'))
        }
      })
      .catch(errors => {
        dispatch(actions.fail(errors))
        dispatch(receiveError('An error occurred while trying to load the curriculum', 'curriculum'))
      });
  }
}

