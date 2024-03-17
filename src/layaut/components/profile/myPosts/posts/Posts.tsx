import React from 'react';
import {Post} from "./post/Post";


export const Posts = () => {
    return (
        <div>
            <Post message={"Привеет, как дела!?"} likesCount={5}/>
            <Post message={"Это первый мой пост"} likesCount={11}/>
            <Post message={"Летим!!!"} likesCount={3}/>

            {/*<Post />*/}
            {/*<Post />*/}
            {/*<Post/>*/}
        </div>
    );
};

