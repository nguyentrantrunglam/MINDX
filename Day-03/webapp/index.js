const express = require("express");
const postModel = require('./post')
const commentModel = require('./comment')
const postCommentModel = require("./postcomments")
const app = express();

app.use(express.static('public'));
app.use(express.json())

// POST
// API create
app.post("/api/posts", async (req, res) => {
    const { content, createdBy } = req.body;
    try {
        const newPost = await postModel.creatPost({ content, createdBy });
        res.send({ success: 1, data: newPost });
    } catch (error) {
        res.send({ success: 0, data: null, message: error.message });
    }
})
//API read
app.get('/api/posts', async (req, res) => {
    try {
        const allPosts = await postModel.getPosts();
        res.send({ success: 1, data: allPosts })
    } catch (error) {
        res.send({ success: 0, data: null, message: error.message })
    }
})
app.get('/api/posts/:postId', async (req, res) => {
    try {
        const { postId } = req.params;
        const post = await postModel.getPost(postId);
        res.send({ success: 1, data: post })
        console.log();
    } catch (error) {
        res.send({ success: 0, data: null, message: error.message })
    }
})
//API update
app.put('/api/posts/:postId', async (req, res) => {
    try {
        //path params
        const { postId } = req.params;
        const { content } = req.body;
        await postModel.updatePost({ content, postId });
        res.send({ success: 1 })
    } catch (error) {
        res.send({ success: 0, data: null, message: error.message })
    }

})
// API delete
app.delete("/api/posts/:postId", async (req, res) => {
    try {
        const { postId } = req.params;
        await postModel.deletePost(postId);
        res.send({ success: 1 })
    } catch (error) {
        res.send({ success: 0, data: null, message: error.message });
    }
})

// Bài 2 : Comment
//API create
app.post('/api/comments', async (req, res) => {
    const { content, createdBy, postId } = req.body;
    try {
        const comment = await commentModel.createComment({ content, createdBy, postId });
        res.send({ success: 1, data: comment });
    } catch (error) {
        res.send({ success: 0, data: null, message: error.message });

    }

})

//API read
app.get('/api/comments', async (req, res) => {
    try {
        const comment = await commentModel.readComments();
        res.send({ success: 1, data: comment });
    } catch (error) {
        res.send({ success: 0, data: null, message: error.message });
    }
})

//API update
app.put('/api/comments/:commentId', async (req, res) => {
    try {
        const { commentId } = req.params;
        const { content } = req.body;
        const newComment = await commentModel.updateComment({ content, commentId })
        res.send({ success: 1, data: newComment });
    } catch (error) {
        res.send({ success: 0, data: null, message: error.message });
    }
})

//API delete
app.delete('/api/comments/:commentId', async (req, res) => {
    try {
        const { commentId } = req.params;
        const deleteComment = await commentModel.deleteComment(commentId);
        res.send({ success: 1, data: deleteComment });
    } catch (error) {
        res.send({ success: 0, data: null, message: error.message });

    }
})

// POST's Comment

//API read

app.get("/api/posts/:postId/comments", async (req,res)=>{
try {
    const {postId} = req.params;
    console.log({postId});
    const readComments = await postCommentModel.readComments(postId);
    res.send({ success: 1, data: readComments })
} catch (error) {
    res.send({ success: 0, data: null, message:error.message});
}
    
    
})

//HomeWork
app.get('/bai1', (req, res) => {
    res.send('Đây là bài 1');
});

app.get('/course', (req, res) => {
    res.send({ "course": "web57" });
});

app.get('/course/random', (req, res) => {
    const course = [{ "course": "c4e" }, { "course": "ci" }, { "course": "web57" }];
    const random = Math.floor(Math.random() * course.length)
    // console.log(course.length);
    // console.log(random);
    res.send(course[random]);
});

app.get('/even', (req, res) => {
    const a = parseInt(req.query.from);
    const b = parseInt(req.query.to);
    var even = [];
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            even.push(i)
            console.log(even)
        }
    }
    // console.log(a);
    // console.log(b);
    // console.log(even);
    const numbers = {
        "number": even,
    }
    res.send(numbers);
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/public/login.html")
});

app.post("/auth/login", (req, res) => {
    // console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    if (username === 'admin' && password === '123456') {
        res.send({ "success": true })
    } else {
        res.send({ "success": false })
    }
})

// //MongoDB
// //lets require/import the mongodb native drivers.
// var mongodb = require('mongodb');
// //We need to work with "MongoClient" interface in order to connect to a mongodb server.
// var MongoClient = mongodb.MongoClient;
// // Connection URL. This is where your mongodb server is running.
// var url = 'mongodb://localhost:9000/my_database_name';
// // Use connect method to connect to the Server
// MongoClient.connect(url, function (err, db) {
//     if (err) {
//         console.log('Unable to connect to the mongoDB server. Error:', err);
//     } else {
//         //HURRAY!! We are connected. :)
//         console.log('Connection established to', url);
//         // do some work here with the database.
//         //Close connection
//         db.close();
//     }
// });


app.listen(9000, err => {
    if (err) {
        return console.log(err);
    } else {
        console.log("Sever started");
    }
})

