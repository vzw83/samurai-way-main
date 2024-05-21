export type MessageType = {
    id: string
    message: string
}
export type DialogType = {
    id: string
    name: string
    isFriend: boolean
    avatar: string | null
}
export type PostsType = {
    id: string
    message: string
    likesCount: number
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