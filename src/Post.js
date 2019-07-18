import React from "react";
import Comment from "./Comment";

function Post(props) {
    return (
        <div className="post">
          <ul className="post">
            <li className="title">Title:{props.post.title}</li>
            <li>Post: {props.post.body}</li>
            <li>Author: {props.post.user.name}</li>
            <li>Email: {props.post.user.email}</li>
            <li>Comments: {props.post.comments.map(comment => (
                <Comment key={comment.id} comment={comment} />))}
            </li>
          </ul>
        </div>
    )
}

export default Post;