import React from "react";

function Comment(props) {
    return (
        <ul className="comment">
        <li>
           <span>Name: </span>{props.comment.name} <br/>
            <span>Email: </span> {props.comment.email} <br/>
         </li>
        </ul>
    )
}


export default Comment;