let host;

if (process.ENV === 'production') {
  host = "https://teencode-backend.herokuapp.com/api/v1"
} else {
  host = "https://teencode-backend.herokuapp.com/api/v1"
}

export default {
  host
};
