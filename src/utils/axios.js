import axios from 'axios';

const BASE_API = 'https://api.exmo.com/v1.1/';
/* Create axios instance */
const instance = axios.create({
  baseURL: BASE_API,
  transitional: {
    forcedJSONParsing: true,
  },
});
/* Type every request info in console */
instance.interceptors.request.use((request) => {
  console.info('[Axios Request]', request.baseURL, request.url, request.params);
  return request;
});
/* Type errors in console */
const errorHandler = (error) => {
  if (
    error.request instanceof Object &&
    error.request.method &&
    error.request.path
  ) {
    console.log(`Failed ${error.request.method} ${error.request.path}`);
  }
  return Promise.reject(error);
};

instance.interceptors.response.use((response) => response, errorHandler);

export default instance;
