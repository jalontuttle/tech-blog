const router = require('express').Router();
const { Post } = require('../models');

router.get('/', async (req, res) => {
    try{
        const postData = await Post.findAll();
        const postInfo = postData.map(post => post.get({ plain: true }));

        res.render('homepage', {postInfo, logged_in: req.session.logged_in})
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
      }
    
    res.render('signup');
})

module.exports = router;