import { AxiosRequestConfig, AxiosResponse } from 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    token?: string;
    callback?: function;
    hideMessage?: boolean;
    notLogin?: boolean;
  }
}