const PostModel = require("./post");
const jwt = require('jsonwebtoken');

const createPost = async (req, res) => {
    const token = req.headers.authorization;

    if (!token) {
        throw new Error('Not found token')
    }
    
    const jwtToken = token.split(' ')[1];
    
    const data = jwt.verify(token, 'web57');

    console.log(data);

    const { title, description, imageUrl, createBy } = req.body;
    const newPost = await PostModel.create({
        title,
        description,
        imageUrl,
        createBy 
    })
    res.send({ success: 1, data: newPost });
}

const getPost = async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.send({ success: 1, data: posts });
    } catch (error) {
        res.send({ success: 0, data: null, message: error.message });
    }
}

const findPost = async (req, res) => {
    const { postId } = req.params;
    try {
        const post = await PostModel.findById(postId);
        res.send({ success: 1, data: post });
    } catch (err) {
        res.send({ success: 0, data: null, message: err.message });
    }
}

const deletePost = async (req, res) => {
    const { postId } = req.params;
    try {
        const deletePost = await PostModel.findByIdAndDelete(postId);
        res.send({ success: 1 });
    } catch (error) {
        res.send({ success: 0, message: error.message });
    }
}

const updatePost = async (req, res) => {
    const { postId } = req.params;
    const { title, description, imageUrl } = req.body;
    try {
        const updatePost = await PostModel.findByIdAndUpdate(
            postId,
            { title, description, imageUrl },
            { new: true }
        );
        res.send({ success: 1, data: updatePost });
    } catch (error) {
        res.send({ success: 0, data: null, message: error.message });
    }
}

module.exports = {
    getPost,
    findPost,
    createPost,
    deletePost,
    updatePost
}