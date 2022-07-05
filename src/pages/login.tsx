/*
 * Filename: e:\huilder_code\heifahaizei\src\pages\login.tsx
 * Path: e:\huilder_code\heifahaizei
 * Created Date: Tuesday, June 28th 2022, 10:50:45 am
 * Author: yang jian fei
 * 
 * Copyright (c) 2022 黑发
 */
import React, { FC } from "react";
import Icon from "components/icon";
import Footer from 'components/layout/Footer';
import { Button, Form, Input, Layout } from 'antd';
import './login.less';

const Login: FC = () => {

    return (
        <>
            <Layout className='login-layout'>
                <Layout.Content className='login-content'>
                    <div className='login-form p16 border'>
                        <div className='tx-center'>
                            <Icon className='login-logo' name='maoxian' />
                        </div>
                        <Form layout='vertical'>
                            <Form.Item label='账号/手机号/邮箱' name='account'>
                                <Input />
                            </Form.Item>
                            <Form.Item label='密码' name='secret'>
                                <Input />
                            </Form.Item>
                            <Form.Item>
                                <Button type='primary' block>登录</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Layout.Content>
                <Layout.Footer className='login-footer'>
                    <Footer />
                </Layout.Footer>
            </Layout>
        </>
    )
};

export default Login;