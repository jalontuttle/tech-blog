const router = require('express').Router();
const { Post} = require('../../models');

router.post('/', async (req, res) => {
    try {
        const postInfo = await Post.create({
            post_title: req.body.post_title,
            post_body: req.body.post_body,
            user_id: req.session.user_id
        })
        res.json(postInfo)
    }catch (err) {
        res.status(400).json(err)
    }
});

module.exports = router;