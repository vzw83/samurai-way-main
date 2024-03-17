import React from 'react';
import styled from "styled-components";
import {Profile} from "../components/profile/Profile";
import {MyPosts} from "../components/profile/myPosts/MyPosts";

export const MainContent = () => {
    return (
        <StylesMainContent>
            <PhotoBaner src="https://sportishka.com/uploads/posts/2022-08/1660740442_37-sportishka-com-p-strela-avto-krasivo-foto-54.jpg" alt=""/>

           <Profile/>
            <MyPosts/>

        </StylesMainContent>
    );
};

const StylesMainContent = styled.div`

    grid-area: content;
    background-color: #6486c5;

    height: calc(100vh - 60px);
    
    
`
const PhotoBaner = styled.img`
    width: 100%;
    height: 200px;
`