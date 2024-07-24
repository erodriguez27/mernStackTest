const axios = require('axios');

module.exports = axios.create({
  baseURL: 'https://echo-serv.tbxnet.com/v1/secret/',
  timeout: 5000,
  headers: {
    'authorization': 'Bearer aSuperSecretKey'
  }
});