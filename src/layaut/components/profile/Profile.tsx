import React from 'react';
import styled from "styled-components";
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ProfilePageType} from "../../assets/Types";



type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (postText: string) =>void
    updatePostText: (id: string, newMessage: string) =>void
}
export const Profile = (props: ProfilePropsType) => {


    return (
        <StylesProfile>

            <ProfileInfo/>
            <MyPosts updatePostText={props.updatePostText} posts={props.profilePage.posts} addPost={props.addPost} />
        </StylesProfile>
    );
};

const StylesProfile = styled.div`
    //grid-area: content;
    //
    //height: calc(100vh - 60px);
    //background-color: #6486c5;


`
