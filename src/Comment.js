import React from "react";

function Comment(props) {
    return (
        <ul className="comment">
        <li>
           Name: {props.comment.name} <br/>
           Email: {props.comment.email} <br/>
         </li>
        </ul>
    )
}


export default Comment;