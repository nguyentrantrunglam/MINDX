const mongoose = require("mongoose");
const comment = require("../comment/comment")
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: true
    },
    description: {
        type: String,
    },
    imageUrl: {
        type: String,
        // required: true,
    },
    comment: [],
    createBy: {
        type: mongoose.Types.ObjectId,
    }
}, {
    timestamps: true,
})

const PostModel = mongoose.model('Post', PostSchema);

module.exports = PostModel;