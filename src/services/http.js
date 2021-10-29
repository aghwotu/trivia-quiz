import axios from 'axios';
import { BASE_URL } from '../config/endpoints';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 100000000,
});

async function getCall(url, params) {
  return await instance.get(url, { params: params });
}

export { getCall };
