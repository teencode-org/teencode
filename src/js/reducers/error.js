import actionTypes from '../constants/actionTypes';

export default function(state = [], action) {
    switch(action.type) {
    case actionTypes.RECEIVE_ERROR:
      return createError(state, action.payload);
    case actionTypes.MARK_ERRORS_AS_DISPLAYED:
      return markErrorsAsDisplayed(state, action.payload);
    default:
      return state;
  }
}

const createError = (state, payload) => {
  return Object.assign({}, state, {
    [payload.owner]: {
      messages: payload.errors,
      hasBeenDisplayed: false
    }
  });
}

const markErrorsAsDisplayed = (state, payload) => {
  let newState = state
  Object.keys(newState).forEach(key => {
    newState[key].hasBeenDisplayed = true
  })
  return newState
}
