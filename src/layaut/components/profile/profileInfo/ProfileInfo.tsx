import React from 'react';
import styled from "styled-components";


export const ProfileInfo = () => {
    return (
        <StylesProfile>

            <PhotoBanner src="https://sportishka.com/uploads/posts/2022-08/1660740442_37-sportishka-com-p-strela-avto-krasivo-foto-54.jpg" alt=""/>
            <Photo
                src="https://abrakadabra.fun/uploads/posts/2021-12/thumbs/1640695318_59-abrakadabra-fun-p-topovaya-avatarka-dlya-ks-go-61.jpg"
                alt=""/>

        </StylesProfile>
    );
};

const StylesProfile = styled.div`
    //grid-area: content;
    //
    //height: calc(100vh - 60px);
    //background-color: #6486c5;


`
const Photo = styled.img`
    width: 150px;
`

const PhotoBanner = styled.img`
    width: 100%;
    height: 200px;
`