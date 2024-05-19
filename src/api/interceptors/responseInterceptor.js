// api/interceptors/responseInterceptor.js
const responseInterceptor = (response) => response;

const errorHandler = (error) => {
  if (error.response && error.response.status === 401) {
    // Handle unauthorized errors (e.g., redirect to login)
  }
  return Promise.reject(error);
};

export default [responseInterceptor, errorHandler];
