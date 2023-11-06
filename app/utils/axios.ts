import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import get from 'lodash/get';

import useAuthStore from '@/hooks/stores/useAuthStore';

const codeMessage: { [status: number]: string } = {
  200: 'The server successfully returned the requested data. Validating response data...',
  201: 'Create or modify data successfully',
  202: 'A request has entered the background queue (asynchronous task)',
  204: 'The data was deleted successfully',
  400: 'The request was sent with an error. The server did not perform any operations to create or modify data',
  401: 'The user does not have permission (token, username, password is incorrect)',
  403: 'User is authorized, but access is forbidden',
  404: 'The request sent is for a record that does not exist and the server is not operating',
  406: 'Not Acceptable',
  410: 'The requested resource is permanently deleted and will not be obtained again',
  422: 'When creating an object, a validation error occurred',
  500: 'The server has an error. Please check the server',
  502: 'Gateway error',
  503: 'The service is unavailable, the server is temporarily overloaded or maintained',
  504: 'The gateway timed out',
};

const axiosSerialize = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: {
    indexes: null,
  },
});

axiosSerialize.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = useAuthStore.getState()?.user?.access_token;
    if (config.headers && token) {
      config.headers.set('Authorization', `Bearer ${token}`);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const requestSerialize = async (url: string, options: AxiosRequestConfig = {}) => {
  try {
    const res: AxiosResponse = await axiosSerialize({
      method: 'GET',
      url,
      baseURL: process.env.REACT_APP_API_URL,
      timeout: 1000 * 5,
      ...options,
    });
    return res.data;
  } catch (err) {
    const { response } = err as AxiosError;
    if (response && response.status) {
      const errorText = get(response, 'data.message') || get(response, 'data.title') || codeMessage[response.status];

      console.log({
        message: `Error ${response.status}:`,
        description: errorText,
      });
    }
    throw err;
  }
};
