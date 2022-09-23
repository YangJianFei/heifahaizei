/**
 * Author: yang jian fei
 * Email: 1294485765@qq.com
 * Created Date: Friday, September 23rd 2022, 2:33:32 pm
 * Modified By: yang jian fei
 * Desc: desc
 * Copyright (c) 2022 黑发
 */

import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {}
  },
  reducers: {
    setUserInfo(state, actions) {
      state.userInfo = actions.payload;
    }
  }
});

export const { setUserInfo } = userSlice.actions;

export const setUser = (user: any) => (dispatch: any) => {
  dispatch(setUserInfo(user));
}

export default userSlice.reducer;