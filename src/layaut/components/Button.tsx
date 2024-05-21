//
// type ButtonPropsType = {
//     title: string
//     onClick: ()=>void
// };
// export const Button = (props: ButtonPropsType) => {
//     return (
//         <button onClick={props.onClick}>
//             {props.title}
//         </button>
//     );
// };

import styled from "styled-components";
import {FC, ButtonHTMLAttributes, PropsWithChildren} from "react";

export const Button: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>> = ({
                                                                                           children,
                                                                                           disabled,
                                                                                           onClick
                                                                                       }) => {
    return (
        <ButtonStyled onClick={onClick} disabled={disabled}>
            {children}
        </ButtonStyled>
    );
};

const ButtonStyled = styled.button`
    background-color: #696f7c;
    color: #2b3744;;
    border: none;
    font-size: 25px;
    font-weight: 600;
    padding: 5px 15px 0;
    border-radius: 5px;

    &:hover {
        background-color: #2f5683;
    }

    &:active {
        background-color: #254465;
    }

    //&:disabled {
    //    opacity: 0.5;
    //    cursor: not-allowed;
}  `