import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
  baseURL: url,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
