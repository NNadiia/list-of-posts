import React from 'react';

function Postlist(props) {
    return (
        <ul className="Postlist">
            {props.posts.map(post => (
                <li key={post.id}>
                    {post.title}
                </li>))}
        </ul>
    )
}

export default Postlist;