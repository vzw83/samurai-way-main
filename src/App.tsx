import React from 'react';
import './App.css';
import styled from "styled-components";

import {Navigation} from "./layaut/navigation/Navigation";
import {MainContent} from "./layaut/mainContent/MainContent";
import {Header} from "./layaut/components/header/Header";



function App() {
    return (

            <AppWrapper>
                <Header/>
                <Navigation/>
                <MainContent/>
            </AppWrapper>
      
    );
}

export default App;

const AppWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;

    grid-template-areas: 
    "header header"
    "nav content";

    grid-template-rows: 60px 1fr;
    grid-template-columns: 2fr 10fr;
`