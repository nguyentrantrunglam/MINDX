const express = require("express");
const mongoose = require('mongoose');
const port = 8080;
const app = express();
//JSON parse
app.use(express.json());


///Mongoose
//Connect to Database
mongoose.connect('mongodb://localhost:27017/test', err => {
    if (err) {
        console.log("err connect mongodb", err);
    }
    console.log("Connected successfully to database");
});
///Schema
//Posts
const PostSchema = new mongoose.Schema({
    content: String,
    creatBy: {
        type: String,
        required: true,
    }
})
const PostModel = mongoose.model('Post', PostSchema);
//Comments
const CommentSchema = new mongoose.Schema({
    content: String,
    creatBy: String,
    postId: String,
})
const CommentModel = mongoose.model('Comment', CommentSchema);

///Posts
//Create
app.post("/api/posts", async (req, res) => {
    const { content, creatBy } = req.body;
    const newPost = await PostModel.create({
        content,
        creatBy
    })
    res.send({ success: 1, data: newPost });
})
//Get all
app.get("/api/posts", async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.send({ success: 1, data: posts });
    } catch (error) {
        res.send({ success: 0, data: null, message: err.message });
    }
})
//Get 1
app.get("/api/posts/:postId", async (req, res) => {
    const { postId } = req.params;
    try {
        const post = await PostModel.findById(postId);
        res.send({ success: 1, data: post });
    } catch (err) {
        res.send({ success: 0, data: null, message: err.message });
    }
})
//Update 1
app.put("/api/posts/:postId", async (req, res) => {
    const { postId } = req.params;
    const { content, creatBy } = req.body;
    try {
        const updatePost = await PostModel.findByIdAndUpdate(
            postId,
            { content, creatBy },
            { new: true }
        );
        res.send({ success: 1, data: updatePost });
    } catch (error) {
        res.send({ success: 0, data: null, message: error.message });
    }
})
//Delete 1 
app.delete('/api/posts/:postId', async (req, res) => {
    const { postId } = req.params;
    try {
        const deletePost = await PostModel.findByIdAndDelete(postId);
        res.send({ success: 1 });
    } catch (error) {
        res.send({ success: 0, message: error.message });
    }
})

///Comments
//Create
app.post("/api/comments", async (req, res) => {
    const { content, creatBy, postId } = req.body;
    try {
        const newComment = await CommentModel.create({
            content,
            creatBy,
            postId
        }
        )
        res.send({ success: 1, data: newComment });
    } catch (error) {
        res.send({ success: 0, message: error.message });
    }
})
//Get all
app.get("/api/comments", async (req, res) => {
    try {
        const Comments = await CommentModel.find();
        res.send({ success: 1, data: Comments });
    } catch (error) {
        res.send({ success: 0, data: null, message: err.message });
    }
})
//Get 1
app.get("/api/comments/:CommentId", async (req, res) => {
    const { CommentId } = req.params;
    try {
        const Comment = await CommentModel.findById(CommentId);
        res.send({ success: 1, data: Comment });
    } catch (err) {
        res.send({ success: 0, data: null, message: err.message });
    }
})
//Update 1
app.put("/api/comments/:CommentId", async (req, res) => {
    const { CommentId } = req.params;
    const { content, creatBy } = req.body;
    try {
        const updateComment = await CommentModel.findByIdAndUpdate(
            CommentId,
            { content, creatBy },
            { new: true }
        );
        res.send({ success: 1, data: updateComment });
    } catch (error) {
        res.send({ success: 0, data: null, message: error.message });
    }
})
//Delete 1 
app.delete('/api/comments/:commentId', async (req, res) => {
    const { commentId } = req.params;
    try {
        const deletecomment = await CommentModel.findByIdAndDelete(commentId);
        res.send({ success: 1 });
    } catch (error) {
        res.send({ success: 0, message: error.message });
    }
})

//Connect port
app.listen(port, err => {
    if (err) {
        return console.log("Error start app ", err);
    }
    console.log("Server started successfully at port " + port);
});
