import React from "react";

function Post(props) {
    return (
        <li>
            {props.post.title}
            <b>{props.post.user.name}</b>
        </li>
    )
}


export default Post;