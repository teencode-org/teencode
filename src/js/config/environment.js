let host;

if (process.ENV === 'production') {
  host = "https://teencode-backend.herokuapp.com/api/v1"
} else {
  host = "https://teencode-backend-staging.herokuapp.com/api/v1"
}

// export default {
//   host
// };

module.exports = {
  host
}