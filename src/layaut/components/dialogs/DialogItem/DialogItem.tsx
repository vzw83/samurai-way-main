import styled from "styled-components";
import {NavLink} from "react-router-dom";
import imgAva from "../../../assets/image/ava.png"
import {EditableTextElement} from "../../EditableTextElement";

type DialogItemPropsType = {
    name: string
    id: string
    addMessage: (userId: string,messageText: string) => void
    avatar: string | null
    isFriends: boolean
}

export const DialogItem = (props: DialogItemPropsType) => {

    let path =`/dialogs/${props.id}`
    return (
        <NavLink to={path} style={{textDecoration: 'none'}}>
            <DialogItemStyles>
                <img src={props.avatar ? props.avatar : imgAva}/>

                <DialogStyles>{props.name}</DialogStyles>
            </DialogItemStyles>
        </NavLink>
    )
}

const DialogStyles = styled.div`
    padding: 10px;
    cursor: pointer;
    text-decoration: none;


`

const DialogItemStyles = styled.div`
    display: flex;
    border-bottom: 1px solid #ccc;

    &:hover {
        background-color: #eee;
    }

    img {
        border-radius: 50%;
        max-width: 40px;
        min-height: 40px;
        object-fit: cover;
    }
`

