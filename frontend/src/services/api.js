import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar';

const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

loadProgressBar({}, api);

export default api;
