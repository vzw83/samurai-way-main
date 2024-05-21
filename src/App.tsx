import React, {useReducer} from 'react';
import './App.css';
import styled from "styled-components";

import {Navigation} from "./layaut/components/navigation/Navigation";

import {Header} from "./layaut/components/header/Header";
import {Profile} from "./layaut/components/profile/Profile";
import {Dialogs} from "./layaut/components/dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {News} from "./layaut/components/news/News";
import {Music} from "./layaut/components/music/Music";
import {Settings} from "./layaut/components/settings/Settings";
import {initialProfileState, profileReducers} from "./model/profile-redusers/profile-reducers";
import {initialMessageState, messagesReducer} from "./model/messge-reducer/message-reducer";
import {initialUsersState, usersReducer} from "./model/users-reducer/users-reduser";
import {addPostAC, updatePostTextAC} from "./model/profile-redusers/profile-actions";
import {addMessageAC, updateMessageAC} from "./model/messge-reducer/message-actions";
import {removeUserAC} from "./model/users-reducer/users-actions";


type AppType = {}

function App(props: AppType) {


    const [profileState, dispatchProfileState] = useReducer(profileReducers, initialProfileState)
    const [messagesState, dispatchMessageState] = useReducer(messagesReducer, initialMessageState)
    const [usersState, dispatchUsersState] = useReducer(usersReducer, initialUsersState)

    const addPost = (postText: string) => {
        dispatchProfileState(addPostAC(postText))
    }


    const addMessage = (userId: string, messageText: string) => {
        dispatchMessageState(addMessageAC(userId, messageText))
    }


    const removeUser = (id: string) => {
        dispatchUsersState(removeUserAC(id))
    }

    const updateMessage = (id: string, newMessage: string) => {
        dispatchMessageState(updateMessageAC(id, newMessage))
    }
    const updatePostText = (id: string, newMessage: string) => {
        dispatchProfileState(updatePostTextAC(id, newMessage))
    }

    return (

        <AppWrapper>
            {/*<BrowserRouter>*/}
            <Header/>
            <Navigation dialogs={usersState} removeUser={removeUser}/>
            <WrapperContent>
                <Routes>
                    <Route path={"/profile"} element={<Profile
                        updatePostText={updatePostText}
                        profilePage={profileState}
                        addPost={addPost}/>}/>
                    <Route path={"/dialogs/:id"} element={<Dialogs messagesState={messagesState}
                                                                   updateMessage={updateMessage}
                                                                   addMessage={addMessage}
                                                                   dialogs={usersState}

                    />}/>
                    <Route path={"/dialogs/"} element={<Dialogs messagesState={messagesState}
                                                                   updateMessage={updateMessage}
                                                                   addMessage={addMessage}
                                                                   dialogs={usersState}

                    />}/>


                    <Route path={"/news"} element={News}/>
                    <Route path={"/music"} element={Music}/>
                    <Route path={"/settings"} element={Settings}/>
                </Routes>
            </WrapperContent>
            {/*</BrowserRouter>*/}
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
const WrapperContent = styled.div`
    background-color: #6486c5;
    grid-area: content;

    height: calc(100vh - 60px);
`