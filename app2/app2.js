const axios = require('axios');

axios.get('http://app1:5000/')
  .then(res => console.log('Response from App 1:', res.data))
  .catch(err => console.error('Error:', err.message));
