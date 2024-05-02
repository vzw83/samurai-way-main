
export type MessageType = {
    id: string
    message: string
}
export type DialogType = {
    id: string
    name: string
}
export type PostsType = {
    id: string
    message: string
    likesCount: string
}
export type ProfilePageType = {
    posts: PostsType[]
}
type DialogsPage = {
    dialogs: DialogType[]
    messages: MessageType[]
}
type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPage
    sidebar: SidebarType
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: "1", message: "Привеет, как дела!?", likesCount: "1"},
            {id: "2", message: "Это первый мой пост", likesCount: "32"},
            {id: "3", message: "Летим!!!", likesCount: "33"}
        ]
    },
    dialogsPage: {
        dialogs: [
            {name: "Fedoryhc", id: "1"},
            {name: "Vovich", id: "2"},
            {name: "Temych", id: "3"},
            {name: "Igor", id: "4"},
        ],
        messages: [
            {message: "Привет", id: "1"},
            {message: "Мое первое сообщение!!", id: "2"},
            {message: "yooo!!!", id: "3"},
        ],
    },
    sidebar: {}
}
