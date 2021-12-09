const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
   
    const postData = await Post.findAll()
 const posts = postData.map((p) => p.get({plain:true}))

    res.render('homepage', {posts});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
   
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', async (req, res) => {
  try {
   
    res.render('createpost');
  } catch (err) {
    res.status(500).json(err);
  }
});
   
router.get('/newPost', async (req, res) => {
  try {
   
    res.render('createpost');
  } catch (err) {
    res.status(500).json(err);
  }
});
   



module.exports = router;