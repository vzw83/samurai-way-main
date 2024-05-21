import styled from "styled-components";
import imgAva from "../../../layaut/assets/image/ava.png"

type FriendPropsType = {
    name: string
    id: string
    avatar: string | null
    isFriend: boolean
};
export const FriendItem = ({name, avatar, isFriend}: FriendPropsType) => {
    return (
        <FriendStyle >
            <img src={avatar ? avatar : imgAva} alt={"ava"}/>
            <span>{name}</span>
        </FriendStyle>
    );
};
const FriendStyle = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;

    & img {
    object-fit: cover;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
`