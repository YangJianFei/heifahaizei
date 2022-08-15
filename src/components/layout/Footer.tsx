/*
 * Filename: e:\huilder_code\heifahaizei\src\components\layout\Footer.tsx
 * Path: e:\huilder_code\heifahaizei
 * Created Date: Thursday, June 30th 2022, 12:05:39 pm
 * Author: yang jian fei
 * 
 * Copyright (c) 2022 黑发
 */
import React, { FC } from "react";
import Icon from 'components/icon';

const Footer: FC = () => {
    return (
        <>
            <div className='border-t p16 tx-center'>
                <span>翻牌次数:</span>
                <img className="mx12" src="https://profile-counter.glitch.me/heifahaizei/count.svg" alt="翻牌次数" />
                2020-{new Date().getFullYear()}
                <a className='mx12' href='https://github.com/YangJianFei' target='_blank' rel='noopener noreferrer'>
                    <Icon name='github' style={{ verticalAlign: 'middle' }} />
                    <strong>@YangJianFei</strong></a>
                / 勾搭我
                <strong>1294485765@qq.com</strong>
            </div>
        </>
    );
};

export default Footer;