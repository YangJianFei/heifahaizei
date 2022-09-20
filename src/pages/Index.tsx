/*
 * Filename: e:\huilder_code\heifahaizei\src\pages\index.tsx
 * Path: e:\huilder_code\heifahaizei
 * Created Date: Tuesday, June 28th 2022, 5:37:14 pm
 * Author: yang jian fei
 * 
 * Copyright (c) 2022 黑发
 */
import React, { FC, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'antd';
import Masonry from "react-masonry-css";
import { ICard, IProjectData } from '@/types';
import './index.less';
import { verifyUrl } from 'utils/tool';

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

const Index: FC = () => {
    const navigate = useNavigate();
    const [cardList, setCardList] = useState<ICard[]>([]);

    useEffect(() => {
        fetch('./data/project.json?t=' + new Date().getTime())
            .then(res => res.json())
            .then((data: IProjectData) => {
                setCardList(data.indexProject);
            });
    }, []);

    const showDetail = (url: string) => {
        if (verifyUrl(url)) {
            window.open(url);
        } else {
            navigate(url);
        }
    };

    const getCardList = (cardList: ICard[]) => {
        return cardList.map(item => {
            return (
                <Card
                    className='my-masonry-card'
                    key={item.url}
                    actions={[<Button type="primary" shape='round' ghost disabled={!item.url} onClick={() => { showDetail(item.url) }}>{item.btnText}</Button>]}
                    cover={<img className='card-img' src={item.img} alt={item.title} />}
                    hoverable
                    title={<span className='tx-title'>{item.title}</span>}
                >
                    <span className='tc-gray'>{item.text}</span>
                </Card>
            );
        });
    };

    return (
        <>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className='my-masonry'
                columnClassName='my-masonry-col'
            >
                {getCardList(cardList)}
            </Masonry>
        </>
    );
};

export default Index;