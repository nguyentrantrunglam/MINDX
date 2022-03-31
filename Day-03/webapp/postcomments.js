const fs = require("fs");

const readComments = async ({postId}) => {
    const oldPosts =JSON.parse(await fs.promises.readFile("./posts.json", {encoding:'utf-8'}))
    const oldComments = JSON.parse(await fs.promises.readFile("./comments.json", {encoding:"utf-8"}))
    const foundPost = oldComments.filter(
        post => (String(post.postId) === postId ));

    return foundPost;
}

module.exports = {
    readComments,
}