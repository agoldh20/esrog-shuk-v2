import axios, { AxiosResponse } from 'axios';

export const getData = (url: string): Promise<AxiosResponse> =>
  axios
    .get(url)
    .then(response => response.data)
    .catch(err => {
      throw err.response;
    });

export const getDataWithHeaders = (url: string, headers): Promise<AxiosResponse> =>
  axios
    .get(url, headers)
    .then(response => response.data)
    .catch(err => {
      throw err.response;
    });

export const postData = (url: string, data): Promise<AxiosResponse> =>
  axios
    .post(url, data)
    .then(response => response.data)
    .catch(err => {
      throw err.response;
    });

export const postDataWithHeaders = (url: string, headers, data): Promise<AxiosResponse> =>
  axios
    .post(url, data, headers)
    .then(response => response.data)
    .catch(err => {
      throw err.response;
    });

export const patchData = (url: string, data): Promise<AxiosResponse> =>
  axios
    .patch(url, data)
    .then(response => response.data)
    .catch(err => {
      throw err.response;
    });

export const patchDataWithHeaders = (url: string, headers, data): Promise<AxiosResponse> =>
  axios
    .patch(url, data, headers)
    .then(response => response.data)
    .catch(err => {
      throw err.response;
    });

export const deleteData = (url: string): Promise<AxiosResponse> =>
  axios
    .delete(url)
    .then(response => response.data)
    .catch(err => {
      throw err.response;
    });
