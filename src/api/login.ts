/**
 * Author: yang jian fei
 * Email: 1294485765@qq.com
 * Created Date: Thursday, September 22nd 2022, 6:43:53 pm
 * Modified By: yang jian fei
 * Desc: desc
 * Copyright (c) 2022 黑发
 */

import { AxiosRequestConfig } from 'axios';
import axios from 'utils/axios';
import { getUUid } from 'utils/tool';

export const getVerifyCode = (): string => {
  return `/api/captcha?uid=${getUUid()}&t=${new Date().getTime()}`;
}

export const login = (data: any, config?: AxiosRequestConfig) => axios.post('/loginByAccount', data, config);