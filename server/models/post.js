const { Schema, model } = require('mongoose');


const postSchema = new Schema({
    title: String,
    desc: String
});


const postModel = model('Post', postSchema);


module.exports = { Post: postModel };