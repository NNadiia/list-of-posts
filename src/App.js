import React from 'react';
import users from './users.js';
import posts from './posts.js';
import comments from './comments.js';
import PostList from './PostList.js';
import './App.css';
import {loadComments, loadPosts, loadUsers} from "./api";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        };
    }

    async componentDidMount() {
        const posts = await loadPosts();
        const users = await loadUsers();
        const comments = await loadComments();
        const items =  this.listOfPostsWithParameters(posts, users, comments);

        this.setState({
            posts: items,
        });
    }

    listOfPostsWithParameters(posts, users, comments) {
        return posts.map(post => {
            return {
                ...post,
                user: users.find(user => user.id === post.userId),
                comments: comments.filter(comment => comment.postId === post.id)
            }
        })
    };


    render() {
        const { posts } = this.state;

        return (
            <div className="App">
                <h1>List of posts</h1>
                <PostList items={posts}/>
            </div>
        )
    }
}

export default App;
