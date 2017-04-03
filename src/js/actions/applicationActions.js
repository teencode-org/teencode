import webAPI from '../utils/webAPI';

const apply = (data) => {
  return webAPI('/inquiries', 'POST', data)
    .then(res => res);
}

export {
  apply
}