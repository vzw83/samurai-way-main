import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {DialogItemPropsType} from "../Dialogs";


export const DialogItem = ({id, name}: DialogItemPropsType) => {
    let path = "/dialogs/" + id
    return (
        <NavLink to={path} style={{textDecoration: 'none'}}>
            <DialogStyles>{name}</DialogStyles>
        </NavLink>
    )
}


const DialogStyles = styled.div`
    padding: 10px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    text-decoration: none;


    &:hover {
        background-color: #eee;
    }
`



