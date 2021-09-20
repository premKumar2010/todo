const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();

const { Post } = require('./models/post');

connectDb();

const corsConfig = {
    origin: 'http://localhost:4200',
    allowedHeaders: 'Content-Type'
}

async function connectDb() {

    try {
        await mongoose.connect(`mongodb+srv://todo-user:vyv3BDP8UEqA4LKb@todo.hery8.mongodb.net/todo?retryWrites=true&w=majority`);
        console.log('DB connected successfull...');
    } catch (err) {
        console.log('DB connection error...', err)
    }

}


app.use(express.json());
app.use(cors(corsConfig));

app.post('/api/posts1', async(req, res) => {
    console.log('req', req.body);
    const post = new Post(req.body);
    console.log('post', post)

    try {
        await post.save();
        res.status(201);
        res.json({ message: 'successfull' });
    } catch (err) {
        console.log('error===>', err);
    }

})

app.get('/api/posts', async(req, res, next) => {
    console.log('req', req.body)
    const documents = await Post.find();
    console.log('documents===>', documents);
    res.status(201)
    res.send(documents);
});

module.exports = app;