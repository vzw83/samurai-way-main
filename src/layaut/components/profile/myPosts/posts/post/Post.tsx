import React from 'react';
import styled from "styled-components";


type PostPropsType = {
    message: string
    likesCount: number
}
export const Post = ({message, likesCount}: PostPropsType) => {
    return (
        <>
            <StylesPost>
                <ImgTeg src='https://www.svgrepo.com/show/492569/smile-1.svg'/>
                {message}

            </StylesPost>
            <span>Like{likesCount}</span>
        </>

    );
};

const StylesPost = styled.div`
    display: flex;
    align-items: center;
`
const ImgTeg = styled.img`
    width: 30px;
    padding:0 20px 20px 20px;
`