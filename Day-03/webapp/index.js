const express = require("express");
const app = express();

app.use(express.static('public'));
app.use(express.json())

app.get('/bai1', (req, res) => {
    res.send('Đây là bài 1');
});
// GET
app.get('/course', (req, res) => {
    res.send({"course":"web57"});
});

app.get('/course/random', (req, res) => {
    const course = [{ "course": "c4e" }, { "course": "ci" },{ "course": "web57" }];
    const random = Math.floor(Math.random()*course.length)
    res.send(course[random]);
});

app.get('/even', (req, res) => {
    const a = parseInt(req.query.from);
    const b = parseInt(req.query.to);
    var even  = [];
    for (let i = a; i <= b; i++){
       if (i%2==0) {
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

// POST
app.post("/auth/login", (req, res) => {
    // console.log(req.body);
    // console.log(req.body.username)
    // console.log(req.body.password)
    if (req.body.username === 'admin' && req.body.password === '123456') {
        res.send({ "success": true })
    } else {
        res.send({ "success": false })
    }
})

app.listen(9000, err => {
    if (err) {
        return console.log(err);
    } else {
        console.log("Sever started");
    }
})

