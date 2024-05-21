import {v1} from "uuid";
import {ActionMessageType} from "./message-actions";


export type MessageType = {
    id: string
    message: string
}
// export type StateMessageType = {
//     messages: MessageType[]
// }
export type StateMessageType = {
    [key: string]: MessageType[]
}

// export let initialMessageState: StateMessageType = {
//     messages: [
//         {message: "Привет", id: v1()},
//         {message: "Мое первое сообщение!!", id: v1()},
//         {message: "yooo!!!", id: v1()},
//     ]
// }
export let initialMessageState: StateMessageType = {
    ["1"]: [
        {message: "Привет", id: v1()},
        {message: "Челябинские мужики, самые суровые))", id: v1()},
        {message: "yooo!!!", id: v1()},

    ],
    ["2"]: [
        {message: "Привет", id: v1()},
        {message: "Бля, запарился!! по большебы терпения", id: v1()}
    ],
    ["3"]: [
        {message: "Cześć! Jak się masz?", id: v1()},
        {message: "Учи колбэки", id: v1()},
    ],
    ["4"]: [
        {message: "здорова, заебал)))", id: v1()}
    ],
    ["5"]: [
        {message: "Привет", id: v1()}
    ]
}


export const messagesReducer = (state: StateMessageType = initialMessageState, actions: ActionMessageType): StateMessageType => {
    switch (actions.type) {
        case "ADD-MESSAGE-TYPE": {
            // const {userId, messageText} = action.payload;

            const newMessage = {message: actions.payload.messageText, id: v1()}
            // return {...state, messages: [newMessage, ...state.messages]}
            return {...state, [actions.payload.userId]: [] }
        }
        case "UPDATE-MESSAGE-TYPE":
            return {...state,
                messages: state.messages.map(el => el.id === actions.payload.userId ? {
                    ...el,
                    message: actions.payload.newMessage
                } : el)
            }
        default:
            return state
    }
}