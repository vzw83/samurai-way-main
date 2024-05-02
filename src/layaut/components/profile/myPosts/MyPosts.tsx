import React from 'react';
import {Post} from "./posts/post/Post";



export type PostTypeData ={
    id?: string
    message: string
    likesCount: string
}
 type MyPostsPropsTYpe = {
     posts: PostTypeData[]
}

export const MyPosts = (props: MyPostsPropsTYpe) => {




    const postsElements = props.posts.map(el =>
        (<Post key={el.id} message={el.message} likesCount={el.likesCount}/>)
    )
    return (
        <div>
            <h2>MyPosts</h2>
            <form action="">
                <textarea></textarea>
                <button>Add post</button>
            </form>
            {postsElements}

        </div>
    );
};

