import webAPI from '../utils/webAPI'

// TODO: Use contact us endpoint.
const contact = (data) => {
  return new Promise(function(resolve, reject) {
    if (data.email && data.message) {
      resolve("Contact message has been sent!");
    }
    else {
      reject(Error("It broke"));
    }
  });
}

export {
  contact
}