 const express = require("express");
 const router = express.Router()
const post = require("../models/post");
const  bcrypt = require("bcrypt");
router.post('/newpost', async (req, res) => {

    const { name, story } = req.body;
    const encrypt = await bcrypt.hash(name ,10);

    const newpost = new post({
        name : encrypt, story
    })

    newpost.save().then(() => {
        console.log("Post saved")
        res.status(200).json({ message: "Post added successfully" })
    }).catch((err) => {
        console.log(err)
        res.status(400).json({ error: "Post not added" })
    })
})


router.get('/allposts', async (req, res) => {

    let posts = await post.find({})
    res.status(200).json(posts);
})

module.exports = router ;