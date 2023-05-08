import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { APIBaseResponse } from './../models/dtos/apiresponse.dto';

export function makeResponse(response: AxiosResponse): APIBaseResponse {
  const { data, status } = response;
  return {
    data,
    status
  };
}

export async function executeRequest(axiosOptions: AxiosRequestConfig) {
  const res = await axios.request(axiosOptions);
  const result = makeResponse(res);
  return result;
}