import React from 'react';
import styled from "styled-components";
import {PostTypeData} from "../../MyPosts";


export const Post = (props: PostTypeData) => {
    return (
        <>
            <StylesPost>
                <ImgTeg src='https://www.svgrepo.com/show/492569/smile-1.svg'/>
                {props.message}
            </StylesPost>
            <span>Like</span>{props.likesCount}
        </>

    );
};

const StylesPost = styled.div`
    display: flex;
    align-items: center;
`
const ImgTeg = styled.img`
    width: 30px;
    padding: 0 20px 20px 20px;
`