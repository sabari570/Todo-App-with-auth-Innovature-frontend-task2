import axios from "axios";

// Creating an axios interceptor
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_TASK_APP_BACKEND_BASE_URL,
  withCredentials: true,
});

// Adding a request interceptor
axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Adding a response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosInstance;
