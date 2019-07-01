import React from "react";

function Comment(props) {
    return (
        <ul className="comment">
        <li>
            {props.comment.name} <br/>
            {props.comment.email} <br/>
         </li>
        </ul>
    )
}


export default Comment;