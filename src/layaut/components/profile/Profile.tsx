import React from 'react';
import styled from "styled-components";


export const Profile = () => {
    return (
        <StylesProfile>


            <Photo
                src="https://abrakadabra.fun/uploads/posts/2021-12/thumbs/1640695318_59-abrakadabra-fun-p-topovaya-avatarka-dlya-ks-go-61.jpg"
                alt=""/>


        </StylesProfile>
    );
};

const StylesProfile = styled.div`

  

`
const Photo = styled.img`
    width: 150px;
`