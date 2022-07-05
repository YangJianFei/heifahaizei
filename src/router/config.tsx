/*
 * Filename: e:\huilder_code\heifahaizei\src\router\config.tsx
 * Path: e:\huilder_code\heifahaizei
 * Created Date: Tuesday, June 28th 2022, 5:29:47 pm
 * Author: yang jian fei
 * 
 * Copyright (c) 2022 黑发
 */
import { ReactNode, lazy } from "react";
import Layout from 'components/layout/Layout';
import { Navigate } from 'react-router-dom';

const Login = lazy(() => import(/* webpackChunkName: 'login' */ 'pages/login'));
const Index = lazy(() => import('pages/Index'));
const NotFound = lazy(() => import('components/error'));

export interface meta {
    title?: string; // 路由名    
};

export interface route {
    path?: string; // 路径
    element: ReactNode,
    children?: route[],
    meta?: meta
    index?: boolean;
    caseSensitive?: boolean;
};

export interface IPathTitle {
    [propName: string]: string;
};

const router: route[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'index',
                element: <Index />,
                meta: {
                    title: '柳暗花明'
                }
            },
            {
                index: true,
                element: <Navigate to='/index' replace />

            },
            {
                path: 'not-found',
                element: <NotFound />,
                meta: {
                    title: '你走丢了！'
                }
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '*',
        element: <Navigate to='/not-found' replace />
    }
];

const getPathTitle = (route: route[], parentPath?: string) => {
    parentPath = parentPath || '';

    let obj: IPathTitle = {};
    route.forEach(item => {
        if (item.children) {
            obj = { ...obj, ...getPathTitle(item.children, item.path) };
        } else if (item.path && item.meta && item.meta.title) {
            if (/^\//g.test(item.path)) {
                obj[item.path] = item.meta.title;
            } else {
                obj[parentPath + item.path] = item.meta.title;
            }
        }
    });
    return obj;
};

export const pathTitle = getPathTitle(router);

export default router;
