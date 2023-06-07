import axios, { AxiosInstance } from "axios";

export const BASE_URL = "http://localhost:3030/";

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default api;

