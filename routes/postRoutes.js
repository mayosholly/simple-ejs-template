const express = require('express');
const router = express.Router();
const {createPost, getPosts}  = require('../controllers/postController');
const Post = require('../models/Post');


router.get("/", getPosts);

router.get("/create", (req, res) => {
    res.render("posts/create")
})

router.post("/", createPost)  

router.get("/edit", (req, res) => {
    res.render("posts/edit")
})



module.exports = router;
