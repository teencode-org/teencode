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
  let callGetCurriculumActions = getCurriculumActions()
  return function(dispatch) {
    dispatch(callGetCurriculumActions.request())
    return webAPI('/curriculum_sessions', 'GET')
      .then(response => {
        dispatch(callGetCurriculumActions.receive(response))
        if (response.errors) {
          dispatch(callGetCurriculumActions.fail(response.errors))
          dispatch(receiveError('An error occurred while trying to load the curriculum', 'curriculum'))
        }
      })
      .catch(errors => {
        dispatch(callGetCurriculumActions.fail(errors))
        dispatch(receiveError('An error occurred while trying to load the curriculum', 'curriculum'))
      });
  }
}

