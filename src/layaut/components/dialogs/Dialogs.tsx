import styled from "styled-components";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {StateMessageType} from "../../../model/messge-reducer/message-reducer";
import {UsersType} from "../../../model/users-reducer/users-reduser";
import {useParams} from "react-router-dom";


// type DialogsPropsType = {
//     dialogs: StateUsersType
//     messagesState: StateMessageType
//     addMessage: (value: string) => void
//     updateMessage: (id: string, newMessage: string) => void
//
// }
type DialogsPropsType = {
    dialogs: UsersType[]
    messagesState: StateMessageType
    addMessage: (userId: string,value: string) => void
    updateMessage: (id: string, newMessage: string) => void

}

export const Dialogs = (props: DialogsPropsType) => {
    // const dialogsElement = props.dialogs.users.map(dialog =>
    const dialogsElement = props.dialogs.map(dialog =>
        <DialogItem avatar={dialog.avatar} key={dialog.id} name={dialog.name} isFriends={dialog.isFriend} id={dialog.id}
                    addMessage={props.addMessage}/>
    )
    let {id} = useParams()

    // const messagesElement = props.messages.map(message =>
    //     <Message key={message.id} message={message.message}/>
    // )

    // const messagesElement = props.messagesState.messages.map(message =>
    //     <Message id={message.id} updateMessage={props.updateMessage} key={message.id} message={message.message}/>
    // )
    console.log(id)


    const onHandlerClick = (userId: string, value: string) => {
        props.addMessage(userId, value)
    }
    // console.log(onHandlerClick)
    return (
        <StylesDialogs>

            <DialogsWrapper>
                {dialogsElement}
            </DialogsWrapper>

            <MessagesWrapper>
                {/*<AddForm onHandlerClick={onHandlerClick} title={"add message"}/>*/}
                {id
                    ? props.messagesState[id].map(message =>
                            <Message id={message.id}
                                     updateMessage={props.updateMessage}
                                     key={message.id}
                                     message={message.message}
                            />
                        )
                    : <span>Выбери диалог</span>
                }

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

// const MessageText = styled.div`
//     padding: 10px;
//     border-radius: 5px;
//     margin-bottom: 10px;
//     background-color: #f5f5f5;
// `


