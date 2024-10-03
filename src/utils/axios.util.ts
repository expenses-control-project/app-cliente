import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

const AxiosPreConfig = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default AxiosPreConfig;