/**
 * Author: yang jian fei
 * Email: 1294485765@qq.com
 * Created Date: Friday, September 23rd 2022, 2:52:49 pm
 * Modified By: yang jian fei
 * Desc: desc
 * Copyright (c) 2022 黑发
 */

import { AxiosRequestConfig } from 'axios';
import axios from 'utils/axios';

export const getUserInfo = (config?: AxiosRequestConfig) => axios.get('/getUserInfo', config);
