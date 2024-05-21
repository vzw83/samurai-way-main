import React from 'react';
import {Post} from "./posts/post/Post";


import {AddForm} from "../../AddForm";
import {PostsType} from "../../../assets/Types";


type MyPostsPropsType = {
    posts: PostsType[]
    addPost: (postText: string) => void
    updatePostText: (id: string, newMessage: string) => void
}
export const MyPosts = (props: MyPostsPropsType) => {
    // const [inputNewText, setInputNewText] = useState("")


    const postsElements = props.posts.map(el =>
        (<Post updatePostText={props.updatePostText}
               id={el.id}
               key={el.id}
               message={el.message}
               likesCount={el.likesCount}/>)
    )


    const onHandlerClick = (title: string) => {
        props.addPost(title)
    }

    return (
        <div className={"postsWrapper"}>
            <h2>MyPosts</h2>
            <AddForm onHandlerClick={onHandlerClick} title="add post"/>

            {postsElements}

        </div>
    );
};

