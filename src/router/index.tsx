/*
 * Filename: e:\huilder_code\heifahaizei\src\router\router.tsx
 * Path: e:\huilder_code\heifahaizei
 * Created Date: Tuesday, June 28th 2022, 5:14:34 pm
 * Author: yang jian fei
 * 
 * Copyright (c) 2022 黑发
 */
import { useRoutes, RouteObject } from 'react-router-dom';
import router, { route } from './config';

const getRoutes = (router: route[]): RouteObject[] => {
    const routers: RouteObject[] = [];
    router.forEach(item => {
        const route: RouteObject = {
            path: item.path,
            element: item.element,
            index: item.index,
            caseSensitive: item.caseSensitive
        };
        if (item.children) {
            route.children = getRoutes(item.children);
        }
        routers.push(route);
    });
    return routers;
};

const MyRoutes = () => {
    let routers = useRoutes(getRoutes(router));
    return routers;
};

export default MyRoutes;