import webAPI from '../utils/webAPI';

const apply = (data) => {
  return webAPI('/applicants', 'POST', data)
    .then(res => res);
}

export {
  apply
}
