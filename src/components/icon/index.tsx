/*
 * Filename: e:\huilder_code\heifahaizei\src\components\icon\index.tsx
 * Path: e:\huilder_code\heifahaizei
 * Created Date: Tuesday, June 28th 2022, 12:01:08 pm
 * Author: yang jian fei
 * 
 * Copyright (c) 2022 黑发
 */

import React, { FC, CSSProperties } from "react";
import './index.less';

interface iconProps {
    name: string; // iconfont 类名
    className?: string; // iconspan 自定义样式
    onClick?: () => void; // icon点击回调
    style?: CSSProperties; // 自定义样式
};

const Icon: FC<iconProps> = (props: iconProps) => {
    const { name, className = '', onClick, style = {} } = props;
    return (
        <i className={`my-icon iconfont icon-${name} ${className}`} style={style} onClick={onClick}></i>
    );
};

export default Icon;