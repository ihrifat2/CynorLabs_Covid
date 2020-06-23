const express = require('express')
const router = express.Router()

const Post = require('../../models/Post')

router.get('/', (req, res) => {
    Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
})

router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
    .then(posts => res.json(posts))
})

router.post('/', (req, res) => {
    const newPost = new Post({
        post: JSON.stringify(req.body)
    })

    newPost.save().then(post => res.json(post))
})

router.put('/:id', (req, res) => {
    Post.findById(req.params.id)
    .then(post => {
        post.post = JSON.stringify(req.body)
        post.save().then(() => res.json({success: true}))
    })
    .catch(err => res.status(404).json({success: false}))
})

router.delete('/:id', (req, res) => {
    Post.findById(req.params.id)
    .then(post => post.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
})

module.exports = router