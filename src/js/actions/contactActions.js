import webAPI from '../utils/webAPI';
import validator from '../utils/validator';

const contact = (data) => {
  const {isValid, concatenatedErrors} = validator.validate(data);
  if (isValid) {
    // TODO: Use contact us endpoint.
    // TODO: Use this error message on server error: Something prevented your message from submitting successfully. Please try again later.'
    return new Promise(function(resolve, reject) {
      resolve();
    });
  } else {
    return new Promise(function(resolve, reject) {
      reject(concatenatedErrors);
    });
  }
}

export {
  contact
}