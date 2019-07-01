import React from 'react';
import Post from "./Post";


function Postlist(props) {
    return (
        <ul>
            {props.posts.map(post => (
                <Post key={post.id} post={post}/>))}
        </ul>
    )
}

export default Postlist;