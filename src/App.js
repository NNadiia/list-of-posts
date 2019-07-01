import React from 'react';
import users from './users.js';
import posts from './posts.js';
import { comments } from './comments.js';
import PostList from './PostList.js';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>List of posts</h1>
        <PostList posts={posts} users={users} comments={comments} />
    </div>
  );
}

export default App;
