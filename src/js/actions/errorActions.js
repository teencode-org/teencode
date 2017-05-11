import actionTypes from "../constants/actionTypes"

export const receiveError = (errors, owner) => {
  return {
    type: actionTypes.RECEIVE_ERROR,
    payload: { errors, owner, receivedAt: new Date() }
  }
}

export const markErrorsAsDisplayed = () => {
  return {
    type: actionTypes.MARK_ERRORS_AS_DISPLAYED,
    payload: { receivedAt: new Date() }
  }
}
