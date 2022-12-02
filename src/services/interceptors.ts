import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const VERSION_API = process.env.REACT_APP_MOVE_API;

export const axiosClient = axios.create({
  baseURL: VERSION_API,
  params: {
    api_key: process.env.REACT_APP_MOVIE_API_KEY_V3
  },
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  async (response) => {
    await sleep()
    return response.data;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export function sleep(ms = 1000): Promise<void> {
  console.log("Kindly remember to remove `sleep`");
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default axiosClient;
