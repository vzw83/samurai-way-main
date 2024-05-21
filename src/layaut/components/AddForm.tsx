import React, {ChangeEvent, useState} from "react";
import {Button} from "./Button";
import styled from "styled-components";

type AddFormPropsType = {
    onHandlerClick: (value: string) => void
    title: string
};
export const AddForm = (props: AddFormPropsType) => {

    const [inputNewText, setInputNewText] = useState("")
    const onChangeInputNewText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setInputNewText(e.currentTarget.value)
    }
    const onClickHandler = () => {
        if (inputNewText.trim()) {
            props.onHandlerClick(inputNewText)
            setInputNewText("")
        }
    }


    return (
        <AddFormStyles>
            <TextareaStyle value={inputNewText} onChange={onChangeInputNewText}></TextareaStyle>
            <Button onClick={onClickHandler}> send</Button>
        </AddFormStyles>
    );
};
const AddFormStyles = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
`
const TextareaStyle = styled.textarea`
    margin-right: 10px;
    max-width: 200px;
    max-height: 50px;
    min-width: 200px;
    min-height: 50px;
`