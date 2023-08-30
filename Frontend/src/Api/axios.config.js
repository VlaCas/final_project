import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:7117/api',
  withCredentials: true
});

const alternateBaseURL = 'http://localhost:7117/api';
instance.interceptors.request.use((config) => {
  config.baseURL = alternateBaseURL;
  return config;
});

export default instance;