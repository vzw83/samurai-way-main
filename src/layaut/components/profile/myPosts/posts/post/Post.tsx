import React from 'react';
import styled from "styled-components";
import {EditableTextElement} from "../../../../EditableTextElement";


type PostPropsType = {
    id: string
    message: string
    likesCount: number
    updatePostText: (id: string, newMessage: string) =>void
}



export const Post = (props: PostPropsType) => {
    const updatePostTextHandler = (newMessage: string) => {
        props.updatePostText(props.id, newMessage)
    }
    return (
        < >
            <StylesPost>
                <ImgTeg src='https://www.svgrepo.com/show/492569/smile-1.svg'/>
                <EditableTextElement value={props.message} onChange={updatePostTextHandler}/>
                {/*{props.message}*/}
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