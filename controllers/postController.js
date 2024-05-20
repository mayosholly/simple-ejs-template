const { query } = require('express')
const Post = require('../models/Post')

const getPosts =  async (req, res) => {

    const titleFilter = req.query.title 
    const descriptionFilter = req.query.description 

    let query = {}

    if (titleFilter){
        query.title = { $regex: titleFilter, $options: 'i'}
    }

    if (descriptionFilter){
        query.description = { $regex: descriptionFilter, $options: 'i'}
    }

    const posts = await Post.find(query)
    res.render("posts/index", {posts: posts})
}

// This is a function that create a post
const createPost = async (req, res) => {
    try{
        const post  = new Post(req.body)
        await post.save()
        res.status(201).json(post)
    }catch(error){
        res.status(400).json({
            error: error.message
        })
    }
}




module.exports = {
    getPosts,
    createPost
}