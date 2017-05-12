import helper from './helpers';

const phoneNumberLimit = 9;

function isValidEmail(email) {
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phone_number) {
  return phone_number.toString().length >= 9;
}

function isEmptyString(str) {
  return !str || str.length === 0;
}

/**
 * @desc validate data with email and required field check.
 * @param {object} data Data as represented in the component state.
 * @param {array} optionalFields The input name as represented in the state of
 *        the component as key. For example, if the message field in a form is
 *        optional and the data is {message: 'Hello'}, the optional fields
 *        should be ['message'].
 * @returns {object} The result containing errors, formatted errors and a
 *        boolean to show validity.
 */
function validate(data, optionalFields) {
  let errors = {};

  if(!isValidEmail(data.email)) {
    errors.email = `The email is invalid`;
  }

  if(!isValidPhoneNumber(data.phone_number)) {
    errors.phone_number = `The phone number is invalid`;
  }

  for(let key in data) {
    if(!optionalFields || optionalFields.indexOf(key) === -1) {
      if(typeof data[key] == 'string' && isEmptyString(data[key])) {
        errors[key] = `The ${helper.getFriendlyName(key)} is required`;
      }
    }
  }

  return {
    errors,
    concatenatedErrors: Object.values(errors).join('. '),
    isValid: Object.keys(errors).length === 0
  };
}

export default {
  validate
}