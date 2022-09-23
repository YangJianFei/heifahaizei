/*
 * Filename: e:\huilder_code\heifahaizei\src\pages\login.tsx
 * Path: e:\huilder_code\heifahaizei
 * Created Date: Tuesday, June 28th 2022, 10:50:45 am
 * Author: yang jian fei
 * 
 * Copyright (c) 2022 黑发
 */
import React, { FC, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Icon from "components/icon";
import Footer from 'components/layout/Footer';
import { Button, Form, Input, Layout, message } from 'antd';
import './login.less';
import { getVerifyCode, login } from 'api/login';
import { getUUid, slotMd5, setToken } from 'utils/tool';

interface ILoginData {
    account: string;
    secret: string;
    code: string;
    uid?: string;
};

const validateMessages = {
    required: '请输入${label}'
};

const rules = {
    account: [{ required: true }],
    secret: [{ required: true }],
    code: [{ required: true }]
};

const Login: FC = () => {

    const [verifyCode, setVerifyCode] = useState(getVerifyCode());
    const [loading, setLoading] = useState(false);

    const [form] = Form.useForm();
    const navigate = useNavigate();

    const handleLogin = (values: ILoginData) => {
        values.uid = getUUid();
        values.secret = slotMd5(values.secret);
        setLoading(true);
        login(values, {
            callback: () => {
                setLoading(false);
            }
        }).then((data: any) => {
            setToken(data);
            message.success('登陆成功');
            navigate('/index');
        });
    };

    return (
        <>
            <Layout className='login-layout'>
                <Layout.Content className='login-content'>
                    <div className='login-form p16 border'>
                        <div className='tx-center'>
                            <Icon className='login-logo' name='maoxian' />
                        </div>
                        <Form form={form} layout='vertical' onFinish={handleLogin} validateMessages={validateMessages}>
                            <Form.Item label='账号/手机号/邮箱' name='account' rules={rules.account}>
                                <Input />
                            </Form.Item>
                            <Form.Item label='密码' name='secret' rules={rules.secret}>
                                <Input.Password />
                            </Form.Item>
                            <Form.Item label='验证码' name='code' rules={rules.code}>
                                <Input className='verify-code' addonAfter={<img src={verifyCode} alt='验证码' onClick={() => { setVerifyCode(getVerifyCode()) }} />} />
                            </Form.Item>
                            <Form.Item>
                                <Button type='primary' block onClick={() => { form.submit() }} loading={loading}>登录</Button>
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