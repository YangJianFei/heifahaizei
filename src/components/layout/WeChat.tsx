/*
 * Filename: e:\huilder_code\heifahaizei\src\components\layout\WeChar.tsx
 * Path: e:\huilder_code\heifahaizei
 * Created Date: Tuesday, July 5th 2022, 9:51:59 am
 * Author: yang jian fei
 * 
 * Copyright (c) 2022 黑发
 */

import React, { FC } from "react";
import { Image } from 'antd';
import weChatCode from '@/assets/img/WeChat-row.jpg';
import logo from '@/assets/img/logo.png';

const WeChat: FC = () => {
    return (
        <>
            <div className='tx-center'>
                <Image className='mb12' width={270} src={weChatCode} fallback={logo} />
                <h4 className='mb24'>一张神奇的二维码</h4>
            </div>
        </>
    );
};

export default WeChat;