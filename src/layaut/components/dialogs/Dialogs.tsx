import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


export type DialogItemPropsType = {
    id?: string
    name?: string
}

export type MessagePropsType = {
    message: string
}


const dialogs: DialogItemPropsType[] = [
    {name: "Fedoryhc", id: "1"},
    {name: "Vovich", id: "2"},
    {name: "Temych", id: "3"},
    {name: "Igor", id: "4"},
]


const messages = [
    {message: "Привет", id: "1"},
    {message: "Мое первое сообщение!!", id: "2"},
    {message: "yooo!!!", id: "3"},
]


const dialogsElement = dialogs.map(dialog =>
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
)
const messagesElement = messages.map(message =>
    <Message key={message.id} message={message.message}/>
)

export const Dialogs = () => {
    return (
        <StylesDialogs>
            <DialogsWrapper>
                {dialogsElement}
            </DialogsWrapper>

            <MessagesWrapper>
                {messagesElement}
            </MessagesWrapper>
        </StylesDialogs>
    );
};


const StylesDialogs = styled.div`
    display: flex;
    padding: 20px;
    background-color: #f5f5f5;
    min-height: calc(100vh - 100px);
`

const DialogsWrapper = styled.div`
    margin-right: 50px;
    width: 30%;
`


const MessagesWrapper = styled.div`
    width: 70%;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`

const MessageText = styled.div`
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    background-color: #f5f5f5;
`


