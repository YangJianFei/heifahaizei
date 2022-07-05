/*
 * Filename: e:\huilder_code\heifahaizei\src\types\index.tsx
 * Path: e:\huilder_code\heifahaizei
 * Created Date: Wednesday, June 29th 2022, 2:42:45 pm
 * Author: yang jian fei
 * 
 * Copyright (c) 2022 黑发
 */

import { ReactNode } from 'react';

export interface ElProps {
    children: ReactNode;
}

export interface ICard {
    loading: boolean;
    img: string;
    title: string;
    text: string;
    url: string;
    btnText: string
}

export interface IProjectData {
    indexProject: ICard[];
}