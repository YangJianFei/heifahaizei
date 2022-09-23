/**
 * Author: yang jian fei
 * Email: 1294485765@qq.com
 * Created Date: Monday, August 15th 2022, 6:37:29 pm
 * Modified By: yang jian fei
 * Desc: desc
 * Copyright (c) 2022 黑发
 */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getToken, CodeMessageMap } from 'utils/tool';
import { message } from 'antd';

const instance = axios.create({
  // timeout:1000
  baseURL: '/api',
  headers: {
    token: getToken()
  }
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.token) {
    config.headers = { ...config.headers, token: config.token };
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

instance.interceptors.response.use((response: AxiosResponse<IApiResult>) => {
  const { config, data } = response;
  if (config?.callback) {
    config.callback();
  }
  if (response.status === 200) {
    if (data.code === 200) {
      return data.data;
    } else {
      if (!config.hideMessage) {
        message.error(CodeMessageMap[data.code] || data.message || '系统错误！');
      }
      // if (!config.notLogin) {
      //   window.location.href = '/login';
      // }
      Promise.reject(data);
    }
  } else {
    if (!config.hideMessage) {
      message.error('服务错误');
    }
    Promise.reject(response);
  }
}, (error: AxiosError) => {
  const config = error?.response?.config;
  if (config?.callback) {
    config.callback();
  }
  if (!config?.hideMessage) {
    message.error('系统错误！');
  }
  return Promise.reject(error);
});

export default instance;
