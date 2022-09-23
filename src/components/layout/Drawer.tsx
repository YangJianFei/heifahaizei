/*
 * Filename: /Users/yangjianfei/Desktop/code/github/heifahaizei/src/components/layout/Drawer.tsx
 * Path: /Users/yangjianfei/Desktop/code/github/heifahaizei
 * Created Date: Friday, September 23rd 2022, 4:49:28 pm
 * Author: yang jian fei
 * 
 * Copyright (c) 2022 黑发
 */

import React, { FC } from 'react';
import { Drawer, Button } from 'antd';
import { setToken } from 'utils/tool';
import { useDispatch } from 'react-redux';
import { setUserInfo } from 'reduce/userSlice';
import { useNavigate } from 'react-router-dom';

interface IDrawer {
  title: string;
  open: boolean;
  close: () => void;
  [key: string]: any;
}

const MyDrawer: FC<IDrawer> = (props) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginOut = () => {
    setToken('');
    dispatch(setUserInfo({}));
    navigate('/login');
  };

  return <>
    <Drawer title={props.title} placement='right' visible={props.open} onClose={props.close} width={316}>
      <Button block onClick={loginOut}>退出登陆</Button>
    </Drawer>
  </>
}

export default MyDrawer;
