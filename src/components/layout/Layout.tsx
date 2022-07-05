/*
 * Filename: e:\huilder_code\heifahaizei\src\components\layout\index.tsx
 * Path: e:\huilder_code\heifahaizei
 * Created Date: Tuesday, June 28th 2022, 10:57:47 am
 * Author: yang jian fei
 * 
 * Copyright (c) 2022 黑发
 */
import React, { FC, useEffect, useState } from "react";
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout, BackTop, Button } from 'antd';
import './layout.less';
import Icon from 'components/icon';
import PageName from './PageName';
import Footer from "./Footer";
import WeChat from "./WeChat";

const MyLayout: FC = () => {
    const [height, setHeight] = useState(164);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = 164;
            let scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
            scrollTop = scrollTop > 100 ? 100 : scrollTop;
            setHeight(totalHeight - scrollTop);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <Layout className='my-layout'>
            <Layout.Header className='my-header' style={{ height: height + 'px' }}>
                <div className='header-img' style={{ opacity: (height - 64) / 100 }}></div>
                <Icon className='header-logo btn-icon' name='maoxian' onClick={() => { navigate('/index') }}></Icon>
                <PageName className='flex-end' />
                <span className='flex1'></span>
                <Icon className='btn-icon' name='github' onClick={() => { window.open('https://github.com/YangJianFei') }}></Icon>
                <Icon className='btn-icon' name='denglu-yonghu' onClick={() => { navigate('/login') }} />
            </Layout.Header>
            <Layout.Content style={{ paddingTop: height + 'px' }}>
                <div className='main-content'>
                    <Outlet />
                </div>
                <BackTop className='my-back-top' visibilityHeight={200}>
                    <Button type='primary' shape='circle' size='large' icon={<Icon name='feiji'></Icon>} />
                </BackTop>
            </Layout.Content>
            <Layout.Footer className='my-footer'>
                <WeChat />
                <Footer />
            </Layout.Footer>
        </Layout>
    );
};

export default MyLayout;