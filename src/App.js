import React from 'react';
import users from './users.js';
import posts from './posts.js';
import comments from './comments.js';
import PostList from './PostList.js';
import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        this.setState({
            posts: this.listOfPostsWithParameters(posts, users, comments)
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
        const {posts} = this.state;

        return (
            <div className="App">
                <h1>List of posts</h1>
                <PostList posts={posts}/>
            </div>
        )
    }
}

export default App;
