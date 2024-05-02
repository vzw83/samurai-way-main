import styled from "styled-components";

import {MessagePropsType} from "../Dialogs";




export const Message = ({message}: MessagePropsType) => {
    return (
        <MessageText>{message}</MessageText>
    )
}




const MessageText = styled.div`
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    background-color: #f5f5f5;
`


