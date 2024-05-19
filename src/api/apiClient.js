// api/apiClient.js
import axios from "axios";
import API_BASE_URL from "./apiConfig";
import requestInterceptor from "./interceptors/requestInterceptor";
import responseInterceptor from "./interceptors/responseInterceptor";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(requestInterceptor, (error) =>
  Promise.reject(error)
);
apiClient.interceptors.response.use(responseInterceptor, (error) =>
  Promise.reject(error)
);

export default apiClient;
