// api/interceptors/requestInterceptor.js
const requestInterceptor = (config) => {
  const token = localStorage.getItem("jwt");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

export default requestInterceptor;
