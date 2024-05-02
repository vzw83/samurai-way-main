import React from 'react';
import styled from "styled-components";
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";




const postData = [
    {id: "1", message: "Привеет, как дела!?", likesCount: "1"},
    {id: "2", message: "Это первый мой пост", likesCount: "32"},
    {id: "3", message: "Летим!!!", likesCount: "33"},
]

export const Profile = () => {
    return (
        <StylesProfile>
            <ProfileInfo/>
            <MyPosts posts={postData}/>
        </StylesProfile>
    );
};

const StylesProfile = styled.div`
    //grid-area: content;
    //
    //height: calc(100vh - 60px);
    //background-color: #6486c5;


`
