import styled from "styled-components";
import {useState} from "react";
import {EditableTextElement} from "../../EditableTextElement";


type MessagePropsType = {
    id: string
    message: string
    updateMessage: (id: string, newMessage: string) => void
}


export const Message = ({message, updateMessage, id}: MessagePropsType) => {

    const updateMessageHandler = (newMessage: string) => {
        updateMessage(id, newMessage)
    }

    return (
        <>

            {/*<MessageText>{message}</MessageText>*/}
            <MessageText >
                <EditableTextElement value={message} onChange={updateMessageHandler}/>
            </MessageText>
        </>
    )
}


const MessageText = styled.div`
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    background-color: #f5f5f5;
`


