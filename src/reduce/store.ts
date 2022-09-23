/**
 * Author: yang jian fei
 * Email: 1294485765@qq.com
 * Created Date: Friday, September 23rd 2022, 2:32:33 pm
 * Modified By: yang jian fei
 * Desc: desc
 * Copyright (c) 2022 黑发
 */

import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';

export default configureStore({
  reducer: {
    user: userSlice
  }
});
