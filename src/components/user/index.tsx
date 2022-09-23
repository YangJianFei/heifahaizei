/*
 * Filename: /Users/yangjianfei/Desktop/code/github/heifahaizei/src/components/user/index.tsx
 * Path: /Users/yangjianfei/Desktop/code/github/heifahaizei
 * Created Date: Friday, September 23rd 2022, 3:00:50 pm
 * Author: yang jian fei
 * 
 * Copyright (c) 2022 黑发
 */

import React, { FC } from 'react';
import { Avatar } from 'antd';
import { getColor } from 'utils/tool';
import './index.less';


const getAvatarName = (name: string): string => {
  if (name.length > 2) {
    return name.substring(name.length - 2);
  } else {
    return name.substring(name.length - 1);
  }
}

const User: FC<IUser> = (props) => {

  return <>
    <div className={props.className + ' avatar-wrapper'} title={props.userName} onClick={props.onClick}>
      {props.userLogo ?
        <Avatar src={props.userLogo} /> :
        <Avatar style={{ color: 'white', backgroundColor: getColor(props.userName) }}>{getAvatarName(props.userName)}</Avatar>
      }
      {props.showName ? props.userName : ''}
    </div>
  </>
}

export default User;