/**
 * Author: yang jian fei
 * Email: 1294485765@qq.com
 * Created Date: Thursday, June 30th 2022, 9:34:35 am
 * Modified By: yang jian fei
 * Desc: desc
 * Copyright (c) 2022 黑发
 */

import md5 from 'md5';

interface ICodeMessage {
    500: string;
    [key: string]: string;
}

const slot = 's3$12d';

export const theme: IMap = {
    a: '#F44336',
    b: '#E91E63',
    c: '#9C27B0',
    d: '#673AB7',
    e: '#3F51B5',
    f: '#2196F3',
    g: '#03A9F4',
    h: '#00BCD4',
    i: '#009688',
    j: '#4CAF50',
    k: '#8BC34A',
    l: '#CDDC39',
    m: '#FFEB3B',
    n: '#FFC107',
    o: '#FF9800',
    p: '#FF5722',
    q: '#795548',
    r: '#607D8B',
    s: '#000000',

    t: '#F44336',
    u: '#E91E63',
    v: '#9C27B0',
    w: '#673AB7',
    x: '#3F51B5',
    y: '#2196F3',
    z: '#03A9F4',
    0: '#00BCD4',
    1: '#009688',
    2: '#4CAF50',
    3: '#8BC34A',
    4: '#CDDC39',
    5: '#FFEB3B',
    6: '#FFC107',
    7: '#FF9800',
    8: '#FF5722',
    9: '#795548'
};

export const CodeMessageMap: ICodeMessage = {
    '500': '系统错误'
}

export const verifyUrl = (url: string): boolean => {
    return /(^#)|(^http(s*):\/\/[^\s]+\.[^\s]+)/.test(url);
};

export const getEnv = (): IEnv => {
    const Env = process.env.NODE_ENV as Env;
    let result: IEnv = {
        env: Env,
        isDev: Env === 'development',
        isPro: Env === 'production',
        isTest: Env === 'test'
    };
    return result;
}

export const setToken = (token: string) => {
    localStorage.setItem('token', token);
}

export const getToken = (): string => {
    return localStorage.getItem('token') || '';
}

export const getUUid = (): string => {
    let uuid = localStorage.getItem('uuid');
    if (uuid) {
        return uuid;
    } else {
        uuid = Math.floor(Math.random() * 1000000) + '_' + new Date().getTime();
        localStorage.setItem('uuid', uuid);
        return uuid;
    }
}

export const slotMd5 = (str: string | number): string => {
    str = str + slot;
    return md5(str);
}

export const getColor = (name: string): string => {
    const nameMd5 = md5(name);
    return theme[nameMd5[0]] || theme['d'];
}