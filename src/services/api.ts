import axios from 'axios';

const api = axios.create({
  baseURL: 'http://xxx.xxx.xx.x:3333',
});

export default api;
