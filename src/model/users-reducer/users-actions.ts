type AddPostType = {
    type: "REMOVE-USER"
    payload: {
        id: string
    }
}

export type ActionProfileType = AddPostType

export const removeUserAC = (id: string): AddPostType => {
    return {
        type: "REMOVE-USER",
        payload: {
            id
        }
    }
}