const express = require('express');
const cors = require('cors');
const app = express();

//adding middlewares

const corsConfig = {
    origin: 'http://localhost:4200',
    allowedHeaders: 'Content-Type'
}

app.use(cors(corsConfig));

app.get('/api/posts', (req, res, next) => {
    res.status(201)
    res.send([{
        "id": 1,
        "title": 'prem',
        "desc": 'test'
    }]);
});


module.exports = app;