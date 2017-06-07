import actionTypes from '../constants/actionTypes';

export default function(state = {}, action) {
  switch(action.type) {
    case actionTypes.REQUEST_GET_COUNTRIES:
      return requestToGetCountries(state, action.payload);
    case actionTypes.RECEIVE_GET_COUNTRIES:
      return getCountries(state, action.payload);
    case actionTypes.FAIL_GET_COUNTRIES:
      return countriesNotReceived();
    default:
      return state;
  }
}

const requestToGetCountries = (state, payload) => {
  return Object.assign({}, state, {
    isFetching: true
  });
}

const getCountries = (state, payload) => {
  return Object.assign({}, state, {
    countriesList: payload.data,
    hasBeenFetched: true
  });
}

const countriesNotReceived = () => {
  return Object.assign({}, {
    hasBeenFetched: false
  });
}
