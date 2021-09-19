const express = require('express');
const cors = require('cors');
const app = express();

//adding middlewares

const corsConfig = {
    orgin: 'http://localhost:4200/',
    allowedHeaders: 'Content-Type'
}

app.use(cors(corsConfig));

app.get('/api/posts', (req, res, next) => {
    res.status(201).json([{
        "title": 'prem',
        "dsc": 'test'
    }]);
});


module.exports = app;