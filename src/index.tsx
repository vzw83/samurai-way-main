import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";





// import {addPost} from "./redux/state";

// export type PostTypeData = {
//     id?: string
//     message: string
//     likesCount: string
// }
// export type MyPostsPropsTYpe = {
//     posts: PostTypeData[]
// }
// const postData = [
//     {id: "1", message: "Привеет, как дела!?", likesCount: "1"},
//     {id: "2", message: "Это первый мой пост", likesCount: "32"},
//     {id: "3", message: "Летим!!!", likesCount: "33"},
// ]
//
// export type DialogItemPropsType = {
//     id?: string
//     name?: string
// }
//
// export type MessagePropsType = {
//     message: string
// }
//
//
// const dialogs: DialogItemPropsType[] = [
//     {name: "Fedoryhc", id: "1"},
//     {name: "Vovich", id: "2"},
//     {name: "Temych", id: "3"},
//     {name: "Igor", id: "4"},
// ]
//
//
// const messages = [
//     {message: "Привет", id: "1"},
//     {message: "Мое первое сообщение!!", id: "2"},
//     {message: "yooo!!!", id: "3"},
// ]

// export type MessageType = {
//     id: string
//     message: string
// }
// export type DialogType = {
//     id: string
//     name: string
// }
// export type PostsType = {
//     id: string
//     message: string
//     likesCount: string
// }
// export type ProfilePageType = {
//     posts: PostsType[]
// }
// type DialogsPage = {
//     dialogs: DialogType[]
//     messages: MessageType[]
// }
// type SidebarType = {}
//
// export type RootStateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPage
//     sidebar: SidebarType
// }
//
//  let state: RootStateType = {
//     profilePage: {
//         posts: [
//             {id: "1", message: "Привеет, как дела!?", likesCount: "1"},
//             {id: "2", message: "Это первый мой пост", likesCount: "32"},
//             {id: "3", message: "Летим!!!", likesCount: "33"}
//         ]
//     },
//     dialogsPage: {
//         dialogs: [
//             {name: "Fedoryhc", id: "1"},
//             {name: "Vovich", id: "2"},
//             {name: "Temych", id: "3"},
//             {name: "Igor", id: "4"},
//         ],
//         messages: [
//             {message: "Привет", id: "1"},
//             {message: "Мое первое сообщение!!", id: "2"},
//             {message: "yooo!!!", id: "3"},
//         ],
//     },
//     sidebar: {}
// }

ReactDOM.render(
    <BrowserRouter>

        <App />
    </BrowserRouter>,
    document.getElementById('root')
);