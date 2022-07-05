/*
 * Filename: e:\huilder_code\heifahaizei\src\components\error\index.tsx
 * Path: e:\huilder_code\heifahaizei
 * Created Date: Wednesday, June 29th 2022, 9:52:59 am
 * Author: yang jian fei
 * 
 * Copyright (c) 2022 黑发
 */
import React, { FC } from "react";
import { Empty } from 'antd';

const NotFound: FC = () => {
    return (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='你在找什么？不要乱逛！' />
    );
};

export default NotFound;