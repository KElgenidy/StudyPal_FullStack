import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = "/choreo-apis/awbo/backend/rest-api-be2/v1.0";

/**
 * Creates an Axios instance with a base URL for the application's API.
 * The base URL is determined by the `VITE_API_URL` environment variable, if it exists,
 * otherwise it defaults to the `apiUrl` constant.
 *
 * @returns {AxiosInstance} - An Axios instance configured with the appropriate base URL.
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

/**
 * Intercepts outgoing requests and adds the access token to the Authorization header if it exists in localStorage.
 * This ensures that authenticated requests include the necessary authorization credentials.
 *
 * @param {Object} config - The request configuration object.
 * @returns {Promise<Object>} - The modified request configuration object.
 */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
