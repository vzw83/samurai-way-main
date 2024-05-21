import {v1} from "uuid";
import {ActionProfileType} from "./profile-actions";


export type PostType = {
    id: string
    message: string
    likesCount: number
}
type StateProfileType = {
    posts: PostType[]
}

export let initialProfileState: StateProfileType = {
    posts: [
        {id: v1(), message: "Привеет, как дела!?", likesCount: 1},
        {id: v1(), message: "Это первый мой пост", likesCount: 32},
        {id: v1(), message: "Летим!!!", likesCount: 33},
        // {id: v1(), message: "ZZZZZ", likesCount: "0"}
    ]
}


export const profileReducers = (state = initialProfileState, action: ActionProfileType): StateProfileType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {id: v1(), message: action.payload.postText, likesCount: 1}
            return {...state, posts: [newPost, ...state.posts]}
        }
        case "UPDATE-POST-TEXT":
            return {...state,
                posts: state.posts.map(el => el.id === action.payload.id ? {
                    ...el,
                    message: action.payload.newPostText
                } : el)
            }
        default:
            return state
    }
}
