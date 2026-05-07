/*
 * @Description:   
 * @Author: YangJianFei 1294485765@qq.com
 * @Date: 2024-12-27 11:31:41
 * @LastEditTime: 2026-05-06 10:25:08
 * @LastEditors: YangJianFei 1294485765@qq.com
 * @FilePath: /heifahaizei/src/components/layout/Footer.tsx
 */
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
import { getEnv } from 'utils/tool';

const Footer: FC = () => {

    const env = getEnv();

    return (
        <>
            <div className='border-t p16 tx-center'>
                @黑发 2020-{new Date().getFullYear()} |
                <a href="https://beian.miit.gov.cn/" target="_blank">
                    粤ICP备2023110939号-3
                </a>
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