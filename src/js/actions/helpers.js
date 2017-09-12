import webAPI from '../utils/webAPI';
import Validator from '../utils/validator';
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
    receive: (data) => {
      return {
        type: receiveType,
        payload: { data, receivedAt: new Date() }
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
    let validationOptions = {};
    if (data) {
      Object.keys(data).forEach(dataKey => {
        validationOptions[dataKey] = {
          required: true
        }
      });
    }

    let validator = new Validator(data, validationOptions);
    const {isValid, concatenatedErrors} = validator.validateAllInputs();
    dispatch(actions.request(data))
    if (isValid) {
      return webAPI(route, requestMethod, data)
        .then(response => {
          if (response.errors) {
            dispatch(actions.fail(response.errors))
            errorMessage && dispatch(receiveError(errorMessage, caller))
          } else {
            dispatch(actions.receive(response))
            return response;
          }
        })
        .catch(errors => {
          dispatch(actions.fail(errors))
          errorMessage && dispatch(receiveError(errorMessage, caller))
        });
    } else {
      dispatch(actions.fail(concatenatedErrors))
      errorMessage && dispatch(receiveError(concatenatedErrors, caller))
    }
  }
}

export {
  handleApiCall,
  baseActions
}