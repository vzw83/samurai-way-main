type AddPostType = {
    type: "ADD-POST"
    payload: {
        postText: string
    }
}
type UpdatePostType = {
    type: "UPDATE-POST-TEXT"
    payload: {
        id: string
        newPostText: string
    }
}
export type ActionProfileType = AddPostType | UpdatePostType

export const addPostAC = (postText: string): AddPostType => {
    return {
        type: "ADD-POST",
        payload: {
            postText
        }
    }
}
export const updatePostTextAC = (id: string, newPostText: string): UpdatePostType => {
    return {
        type: "UPDATE-POST-TEXT",
        payload: {
            id,
            newPostText
        }
    }
}