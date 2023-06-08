import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";

export const BASE_URL = "http://localhost:3030/";

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
  let correctPath: boolean = config.url !== "login";
  if (localStorage.getItem("jwt") !== "" && correctPath) {
      config.headers.Authorization = `Bearer ${localStorage.getItem("jwt")}`;
  }
  return config;
  },

  (error: AxiosError) => {
      return Promise.reject(error);
  }
)
export default api;

