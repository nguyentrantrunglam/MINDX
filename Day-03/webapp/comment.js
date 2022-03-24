const fs = require('fs');

//Create
const createComment = async ({ content, createdBy, postId }) => {
    const oldCommets = JSON.parse(await fs.promises.readFile('./comments.json', { encoding: "utf-8" }))
    const newComment = {
        content,
        createdBy,
        postId: parseInt(postId),
        commentId: Date.now(),
    }
    const newComments = [...oldCommets, newComment];

    await fs.promises.writeFile(
        "./comments.json",
        JSON.stringify(newComments)
    )
    return newComment;
}

//Read

const readComments = async () => {
    const oldCommets = JSON.parse(await fs.promises.readFile('./comments.json', { encoding: "utf-8" }))
    return oldCommets;
}

//Update

const updateComment = async ({ content, commentId }) => {
    const oldComments = JSON.parse(await fs.promises.readFile('./comments.json', { encoding: "utf-8" }))
    const newComment = oldComments.map(comment => {
        if (String(comment.commentId) === commentId) {
            return {
                ...comment,
                content
            }
        }
        return comment;
    });

    await fs.promises.writeFile(
        './comments.json',
        JSON.stringify(newComment));

    return newComment;
}

//Delete

const deleteComment = async ( commentId ) => {
    const oldComments = JSON.parse(await fs.promises.readFile('./comments.json', { encoding: "utf-8" }))
    const newComments = oldComments.filter(comment => comment.commentId != commentId);

    await fs.promises.writeFile(
        './comments.json',
        JSON.stringify(newComments));

    return commentId;

}

module.exports = {
    createComment,
    readComments,
    updateComment,
    deleteComment,
}