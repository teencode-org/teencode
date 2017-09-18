import actionTypes from '../constants/actionTypes';

export default function(state = initialState, action) {
  switch(action.type) {
    case actionTypes.REQUEST_GET_CURRICULUM:
    case actionTypes.REQUEST_GET_FACILITATOR_GUIDE:
      return requestToGetCurriculum(state, action.payload);
    case actionTypes.RECEIVE_GET_CURRICULUM:
      return getCurriculum(state, action.payload);
    case actionTypes.FAIL_GET_CURRICULUM:
      return curriculumNotReceived();
    case actionTypes.RECEIVE_GET_FACILITATOR_GUIDE:
      return getFacilitatorGuide(state, action.payload);
    case actionTypes.FAIL_GET_FACILITATOR_GUIDE:
      return facilitatorGuideNotReceived();
    default:
      return state;
  }
}

const initialState = {
  isFetching: false,
  hasBeenFetched: false,
  guide: {}
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

const requestToGetFacilitatorGuide = (state, payload) => {
  return Object.assign({}, state, {
    isFetching: true
  });
}

const getFacilitatorGuide = (state, payload) => {
  return Object.assign({}, state, {
    guide: payload.data,
    hasBeenFetched: true
  });
}

const facilitatorGuideNotReceived = () => {
  return Object.assign({}, {
    hasBeenFetched: false
  });
}
