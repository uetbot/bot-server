// @flow

import axios, {type AxiosInstance} from 'axios';

export const request: AxiosInstance = axios.create({
  baseURL: 'https://graph.facebook.com',
  withCredentials: true,
});
