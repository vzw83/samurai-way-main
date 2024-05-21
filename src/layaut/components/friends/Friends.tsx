import {DialogItem} from "../dialogs/DialogItem/DialogItem";
import {DialogType} from "../../assets/Types";
import {FriendItem} from "./FriendItem";
import styled from "styled-components";
// import {StateUsersType} from "../../../model/users-reducer/users-reduser";
import {useState} from "react";
import {Button} from "../Button";
import {UsersType} from "../../../model/users-reducer/users-reduser";

type FriendsPropsType = {
    dialogs: UsersType[]
    removeUser: (id: string) => void
};
export const Friends = (props: FriendsPropsType) => {
    const [accordion, setAccordion] = useState(false)
    const onClickHandler = () => {
        setAccordion(!accordion)
    }
    const removeUserHandler = (id: string)=>{
        props.removeUser(id)
    }
    return (
        <>
            <div>
                <TitleH3 style={{cursor: "pointer"}} onClick={onClickHandler}>My Friends </TitleH3>
                {
                    accordion && <FriendsStyle>
                        {/*<DialogItem name={} id={} addMessage={} avatar={}/>*/}
                        {
                            // props.dialogs.users.map(el => {
                            props.dialogs.map(el => {
                                return (<div key={el.id}>
                                        {el.isFriend ? <div><FriendItem name={el.name} id={el.id} avatar={el.avatar}
                                                                        isFriend={el.isFriend}/></div> : <div>
                                        </div>}
                                        {/*<button onClick={() => props.removeUser(el.id)}>x</button>*/}
                                        {/*<Button title={'x'} onClick={() => props.removeUser(el.id)}/>*/}
                                        <Button onClick={()=>removeUserHandler(el.id)}>x</Button>
                                    </div>
                                )
                            })}
                    </FriendsStyle>
                }
            </div>
            <div>
                <h3>My Mentors</h3>
                {
                    // props.dialogs.users.map(el => {
                    props.dialogs.map(el => {
                        return (<div key={el.id}>
                                {!el.isFriend ? <div><FriendItem name={el.name} id={el.id} avatar={el.avatar}
                                                                 isFriend={el.isFriend}/></div> : <div></div>}
                            </div>
                        )
                    })}

            </div>
            {/*<h5><span style={{fontWeight: "300"}}>Все кореша: {props.dialogs.users.length} шт</span></h5>*/}
            <h5><span style={{fontWeight: "300"}}>Все кореша: {props.dialogs.length} шт</span></h5>
        </>

    );
};

const FriendsStyle = styled.div`
    display: flex;
    flex-wrap: wrap;

`
const TitleH3 = styled.h3`

    @keyframes shake {
        0%, 100% {
            transform: translateX(0);
        }
        10%, 30%, 50%, 70%, 90% {
            transform: translateX(-1px);
        }
        //20%, 40%, 60%, 80% {
        //    transform: translateX(1px);
        //}
    }


    display: inline-block;
    animation: shake 0.8s; /* Продолжительность анимации */
    animation-iteration-count: infinite; /* Анимация будет повторяться бесконечно */
`