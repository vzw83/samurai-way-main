import React from 'react';
import styled from "styled-components";

export const Header = () => {
    return (
        <HeaderStyled>
            <a href=""><img
                src="https://avatars.mds.yandex.net/i?id=827bdeb26ce8c03d2c70757eeed47906-4797711-images-thumbs&ref=rim&n=33&w=200&h=150"
                alt=""/></a>
            <input placeholder="поиск по сайту" type="text"/>
        </HeaderStyled>
    );
};

const HeaderStyled = styled.header`

    grid-area: header;
    background-color: #0447c4;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    & input{
        min-width: 600px;
        
        margin-right: 50px;
    }

    & img {
        width: 50px;
        margin-left: 50px;
    }
    
`