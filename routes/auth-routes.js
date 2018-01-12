const router = require('express').Router();

router.get('/login', (req,res)=>{
  res.render('login');
});

router.get('/logout', (req,res)=>{
// handle with passport
  res.send('loggin out');
});

router.get('/google', (req,res)=>{
  //handle with passport
  res.send('logging in with google');
});

module.exports = router;
