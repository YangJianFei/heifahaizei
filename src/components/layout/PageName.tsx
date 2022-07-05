/*
 * Filename: e:\huilder_code\heifahaizei\src\components\layout\routerTitle.tsx
 * Path: e:\huilder_code\heifahaizei
 * Created Date: Wednesday, June 29th 2022, 10:48:22 am
 * Author: yang jian fei
 * 
 * Copyright (c) 2022 黑发
 */
import React, { FC, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { pathTitle } from '../../router/config';
import './pageName.less';

interface TitleProps {
    title?: string; // 路由名
    className?: string;
};

const PageName: FC<TitleProps> = (props: TitleProps) => {

    const location = useLocation();
    const [title, setTitle] = useState('');

    useEffect(() => {
        setTitle(pathTitle[location.pathname] || '');
    }, [location]);

    return (
        <span className={`page-name ${props.className}`}>{props.title || title}</span>
    );
};

export default PageName;