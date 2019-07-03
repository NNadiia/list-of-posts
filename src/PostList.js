import React from 'react';
import Post from "./Post";


function Postlist(props) {
    return (
        <ul className="postlist">
            {props.items.map(post => (
                <Post key={post.id} post={post}/>))}
        </ul>
    )
}

export default Postlist;