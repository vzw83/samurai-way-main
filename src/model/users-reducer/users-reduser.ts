import imgFedor from "../../layaut/assets/image/fedor.png";
import {v1} from "uuid";
import imgVova from "../../layaut/assets/image/vova.png";
import imgTema from "../../layaut/assets/image/tema.png";


// export type StateUsersType = {
//     users: UsersType[]
// }
export type UsersType = {
    name: string
    avatar: string | null
    isFriend: boolean
    id: string
}

// export let initialUsersState: StateUsersType = {
//     users: [
//         {name: "Fedoryhc", avatar: imgFedor, isFriend: true, id: v1()},
//         {name: "Vovich", avatar: imgVova, isFriend: true, id: v1()},
//         {name: "Temych", avatar: imgTema, isFriend: true, id: v1()},
//         {name: "Igor", avatar: null, isFriend: false, id: v1()}
//     ]
// }
export let initialUsersState: UsersType[] = [
    {id: "1", name: "Fedoryhc", avatar: imgFedor, isFriend: true},
    {id: "2", name: "Vovich", avatar: imgVova, isFriend: true},
    {id: "3", name: "Temych", avatar: imgTema, isFriend: true},
    {id: "4", name: "Serega", avatar: imgTema, isFriend: true},
    {id: "5", name: "Igor", avatar: null, isFriend: false}
]


// export const usersReducer = (state: StateUsersType = initialUsersState, active: any): StateUsersType => {
//     switch (active.type) {
//         case 'REMOVE-USER': {
//             return {...state, users: state.users.filter((el) => el.id !== active.payload.id)}
//         }
//         default:
//             return state
//     }
// }

// export const usersReducer = (state: UsersType[] = initialUsersState, active: any): UsersType[] => {
//     switch (active.type) {
//         case 'REMOVE-USER': {
//             return {...state, users: state.users.filter((el) => el.id !== active.payload.id)}
//         }
//         default:
//             return state
//     }
// }

export const usersReducer = (state: UsersType[] = initialUsersState, active: any): UsersType[] => {
    switch (active.type) {
        case 'REMOVE-USER': {
            return state.filter((el) => el.id !== active.payload.id)
        }
        default:
            return state
    }
}