import webAPI from '../utils/webAPI';
import validator from '../utils/validator';
import { receiveError } from './errorActions';

const baseActions = ({
  requestType,
  receiveType,
  failType
}) => {
  return {
    request: (data) => {
      return {
        type: requestType,
        payload: { data }
      }
    },
    receive: () => {
      return {
        type: receiveType,
        payload: { receivedAt: new Date() }
      }
    },
    fail: (errors) => {
      return {
        type: failType,
        payload: { errors, receivedAt: new Date() }
      }
    }
  }
}

const handleApiCall = ({
  actions,
  data,
  errorMessage,
  caller,
  route,
  requestMethod
}) => {
  return (dispatch) => {
    const {isValid, concatenatedErrors} = validator.validate(data);
    
    dispatch(actions.request(data))
    if (isValid) {
      return webAPI(route, requestMethod, data)
        .then(response => {
          if (response.errors) {
            dispatch(actions.fail(response.errors))
            dispatch(receiveError(errorMessage, caller))
          } else {
            dispatch(actions.receive(response))
          }
        })
        .catch(errors => {
          dispatch(actions.fail(errors))
          dispatch(receiveError(errorMessage, caller))
        });
    } else {
      dispatch(actions.fail(concatenatedErrors))
      dispatch(receiveError(concatenatedErrors, caller))
    }
  }
}

export {
  handleApiCall,
  baseActions
}