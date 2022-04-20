require('dotenv').config;
const express = require("express");
const postRouter = require("./modules/post/post.router");
const authRouter = require("./modules/auth/auth.router")
const port = 8080;
const app = express();
const mongoose = require("mongoose");
app.use(express.json());


//Connect Database
mongoose.connect("mongodb://localhost:27017/mindx-images-web57", err =>{
    if (err) {
        return console.log("DB connect err", err);
    }
    console.log("DB connect successfully");
})
//POST
app.use("/api/posts", postRouter);
//AUTH
app.use("/api/auth", authRouter);

app.listen( 8080, (err) => {
    if (err) {
        return console.log("Server error", err);
    }
    console.log("Server started at port " + port);
})