import React from "react";
import Comment from "./Comment";

function Post(props) {
    return (
        <div className="post">
          <li className="post">
            Title: {props.post.title} <br/>
            Post: {props.post.body}<br/>
            Author: {props.post.user.name}<br/>
            Email: {props.post.user.email} <br/>
            Comments: {props.post.comments.map(comment => (
            <Comment key={comment.id} comment={comment} />))}
          </li>
        </div>
    )
}

export default Post;