import React from 'react';

function Post(props) {
    return (
        <li>
            {props.post.title}
        </li>
    )
}


function Postlist(props) {
    return (
        <ul className="Postlist">
            {props.posts.map(post => (
                <Post key={post.id} post={post}/>))}
        </ul>
    )
}

export default Postlist;