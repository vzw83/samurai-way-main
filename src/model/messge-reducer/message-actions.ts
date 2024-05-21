type AddMessageType = {
    type: "ADD-MESSAGE-TYPE"
    payload: {
        userId: string,
        messageText: string
    }
}
type UpdateMessageType = {
    type: "UPDATE-MESSAGE-TYPE"
    payload: {
        userId: string,
        newMessage: string

    }
}


export type ActionMessageType = AddMessageType | UpdateMessageType

export const addMessageAC = (userId: string,messageText: string): AddMessageType => {
    return {
        type: "ADD-MESSAGE-TYPE",
        payload: {
            userId,
            messageText
        }
    }
}
export const updateMessageAC = (userId: string, newMessage: string): UpdateMessageType => {
    return {
        type: "UPDATE-MESSAGE-TYPE",
        payload: {
            userId,
            newMessage
        }
    }
}