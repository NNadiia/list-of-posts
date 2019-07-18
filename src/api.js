export const loadPosts = () => {
    return fetch ('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json());
};

export const loadUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json());
};

export const loadComments = () => {
    return fetch ("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json());
};