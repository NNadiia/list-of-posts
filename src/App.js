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
            isLoaded: false,
         };
    }

    async loadData(){
        const posts = await loadPosts();
        const users = await loadUsers();
        const comments = await loadComments();
        const items =  this.listOfPostsWithParameters(posts, users, comments);

       this.setState({
            posts: items,
            isLoaded: true,
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
       const { posts, isLoaded } = this.state;

        return (
            <main className="App">
                <h1>List of posts</h1>
                {isLoaded ?
                    <PostList items={posts} /> :
                    <button
                        onClick={() => this.loadData()}>
                        Button
                    </button>
                }
            </main>
        )
    }
}

export default App;
