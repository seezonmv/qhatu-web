import axios from 'axios';
import TokenService from '../core/services/TokenService';

const instance = axios.create({
  baseURL: process.env.REACT_APP_QHATU_API_URL,
});

instance.interceptors.request.use(
  (config) => {
    if (TokenService.getUserData() !== null) {
      const token = TokenService.getAccessToken();
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
