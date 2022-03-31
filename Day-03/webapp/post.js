const fs = require('fs');

//Create
const creatPost = async ({ content, createdBy }) => {
    const oldPosts = JSON.parse(await fs.promises.readFile('./posts.json', { encoding: 'utf-8' }));

    const newPost = {
        id: Date.now(),
        content,
        createdBy,
    }
    const newPosts = [...oldPosts, newPost];

    await fs.promises.writeFile(
        './posts.json',
        JSON.stringify(newPosts));

    return newPost;
}

//Read all
const getPosts = async () => {
    const oldPosts = JSON.parse(await fs.promises.readFile('./posts.json', { encoding: 'utf-8' }));
    return oldPosts;
}

//Read 1
const getPost = async ({postId}) => {
    const oldPosts = JSON.parse(await fs.promises.readFile('./posts.json', { encoding: 'utf-8' }));
    const foundPost = oldPosts.find(post => String(post.id) === postId);

    return foundPost;
}

//Update
const updatePost = async ({ content, postId }) => {
    const oldPosts = JSON.parse(await fs.promises.readFile('./posts.json', { encoding: 'utf-8' }));
    const newPosts = oldPosts.map(post => {
        if (String(post.id) === postId) {
            return {
                ...post,
                content
            }
        }
        return post;
    });

    await fs.promises.writeFile(
        './posts.json',
        JSON.stringify(newPosts));

    return postId;
}

//Delete
const deletePost = async (postId) => {
    const oldPosts = JSON.parse(await fs.promises.readFile('./posts.json', { encoding: 'utf-8' }));
    const newPosts = oldPosts.filter(post => post.id != postId);

    console.log(oldPosts);
    await fs.promises.writeFile(
        './posts.json',
        JSON.stringify(newPosts));

    return postId;
}

module.exports = {
    creatPost,
    getPosts,
    getPost,
    updatePost,
    deletePost,
}