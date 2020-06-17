const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    post: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Post = mongoose.model('post', PostSchema)