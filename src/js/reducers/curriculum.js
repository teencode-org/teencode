import actionTypes from '../constants/actionTypes';

export default function(state = {}, action) {
  switch(action.type) {
    case actionTypes.REQUEST_GET_CURRICULUM:
      return requestToGetCurriculum(state, action.payload);
    case actionTypes.RECEIVE_GET_CURRICULUM:
      return getCurriculum(state, action.payload);
    case actionTypes.FAIL_GET_CURRICULUM:
      return curriculumNotReceived();
    default:
      return state;
  }
}

const requestToGetCurriculum = (state, payload) => {
  return Object.assign({}, state, {
    isFetching: true
  });
}

const getCurriculum = (state, payload) => {
  return Object.assign({}, state, {
    curriculumList: payload.data,
    hasBeenFetched: true
  });
}

const curriculumNotReceived = () => {
  return Object.assign({}, {
    hasBeenFetched: false
  });
}
