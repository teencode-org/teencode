import actionTypes from '../constants/actionTypes';

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.REQUEST_GET_CURRICULUM:
    case actionTypes.REQUEST_GET_FACILITATOR_GUIDE:
    case actionTypes.REQUEST_GET_LESSON_NOTES:
      return requestToGetCurriculum(state, action.payload);
    case actionTypes.FAIL_GET_CURRICULUM:
    case actionTypes.FAIL_GET_FACILITATOR_GUIDE:
    case actionTypes.FAIL_GET_LESSON_NOTES:
      return curriculumNotReceived();
    case actionTypes.RECEIVE_GET_CURRICULUM:
      return getCurriculum(state, action.payload);
    case actionTypes.RECEIVE_GET_FACILITATOR_GUIDE:
      return getFacilitatorGuide(state, action.payload);
    case actionTypes.RECEIVE_GET_LESSON_NOTES:
      return getLessonNotes(state, action.payload);
    default:
      return state;
  }
}

const initialState = {
  isFetching: false,
  hasBeenFetched: false,
  guide: {},
  notes: {}
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

const getFacilitatorGuide = (state, payload) => {
  return Object.assign({}, state, {
    guide: payload.data,
    hasBeenFetched: true
  });
}

const getLessonNotes = (state, payload) => {
  return Object.assign({}, state, {
    notes: payload.data,
    hasBeenFetched: true
  });
}
