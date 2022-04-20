const express = require("express");
const router = express.Router();
const postController = require("./post.controller")

//Create
router.post("/", postController.createPost)
//Get all
router.get("/", postController.getPost)
//Get 1
router.get("/:postId", postController.findPost)
// Update 
router.put("/:postId", postController.updatePost)
//Delete 1 
router.delete('/:postId', postController.deletePost)

module.exports = router;