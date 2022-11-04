import axios from 'axios';

import { BASE_URL } from './constant';

export const HttpRequest = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
});

const onResponseSuccess = (response: any) => {
  return response.data;
};

const onResponseError = async (error: { response: any }) => {
  if (!error.response) {
    error.response.data.message = 'CLIENT_ERROR';
  }

  if (error.response) {
    error.response.data.message =
      error.response.data.message || 'ERROR_UNDEFINED';

    if (error.response.status === 401) {
      error.response.data.message =
        String(error.response.data.message) || '401';
    }
    if (error.response.status === 403) {
      error.response.data.message =
        String(error.response.data.message) || '403';
    }
    if (error.response.status === 500) {
      error.response.data.message =
        String(error.response.data.message) || '500';
    }
    if (error.response.status === 404) {
      error.response.data.message =
        String(error.response.data.message) || '404';
    }
  }

  await Promise.reject(error.response.data);
};

HttpRequest.interceptors.response.use(onResponseSuccess, onResponseError);
