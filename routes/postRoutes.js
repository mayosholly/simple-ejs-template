const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
    res.render("posts/index")
})

router.get("/create", (req, res) => {
    res.render("posts/create")
})

router.get("/edit", (req, res) => {
    res.render("posts/edit")
})



module.exports = router;
